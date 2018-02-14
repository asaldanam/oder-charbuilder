import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as data from './datafiles/data.datafile'
import { Character } from '../classes/character';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  private collection:string = 'test';

  constructor(
    private afs: AngularFirestore
  ) { }

  runScript() {
    let config = data.specs;
    for (let i = 0; i < config.items.length; i++) {
      console.log(config.items[i].spec);
      this.afs.collection(config.collection).doc(config.items[i].spec).set(config.items[i]);  
    }
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as data from './datafiles/data.datafile'

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
    let config = data.realms;
    for (let i = 0; i < config.items.length; i++) {
      console.log(config.items[i].name);
      this.afs.collection(config.collection).doc(config.items[i].id).set(config.items[i]);  
    }
  }

  ngOnInit() {
  }

}

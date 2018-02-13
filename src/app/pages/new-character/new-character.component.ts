import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../services/classes.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Character } from '../../interfaces/character';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  private loadingCounter = 0;

  private classCollection:string = 'classes';
  private specsCollection:string = 'specs';

  private classes:any;
  private specs:any;

  private filterSpecs:any;

  private character:Character = {
    id: ''
  };
  

  constructor(
    private afs: AngularFirestore,
    private _classes: ClassesService
  ) { }

  getClasses() { 
    console.log(this.loadingCounter);
    this.classes = this.afs.collection(this.classCollection).valueChanges().subscribe(
      resp => {
        this.classes = resp;
        this.loadingCounter = this.loadingCounter + 1;
        console.log(this.classes);
        console.log(this.loadingCounter);
      }
    )
    this.specs = this.afs.collection(this.specsCollection).valueChanges().subscribe(
      resp => {
        this.specs = resp;
        this.loadingCounter = this.loadingCounter + 1;
        console.log(this.specs);
        console.log(this.loadingCounter);       
      }
    )
  }

  setClass(event) {
    // console.log('set Class');
    // console.log(event);
    this.filterSpecs = this.specs.filter( function(spec){return (spec.class==event);} );
    this.character.class = event;
    // console.log(this.character);
  }

  setSpec(event) {
    this.character.spec = event;
    // console.log('set spec');
    // console.log(event);
    console.log(this.character);
  }

  ngOnInit() {
    this.getClasses()
  }

}

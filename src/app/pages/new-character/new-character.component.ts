import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../services/classes.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Character } from '../../classes/character';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  private loadClass = false;
  private loadSpecs = false;

  private classCollection:string = 'classes';
  private specsCollection:string = 'specs';

  private classes:any;
  private specs:any;
  
  private filterSpecs:any;
  private maxAttPoints:number = 10;

  private character:Character =  {
    id: '',
    wowName: '',
    realmId: '',
    rpName: '',
    rpSurname: '',
    level: 0,
    class: '',
    spec: '',
    specVitality: 0,
    race: '',
    attributes: {
        vit: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        pur: 0,
    },
    compentencies: {
        lightWeapons: 0,
        heavyWeapons: 0,
        rangeWeapons: 0,
        magicBonus: 0,
    },
    armor: {
        armorType: 0,
        defense: 0,
        physicalDmgReduction: 0,
        magicDmgReduction: 0,
    },
    salvation: {
        fortitude: 0,
        reflexes: 0,
        willpower: 0,
    },
    hasSpells: true,
    spells: 0
  };
  

  constructor(
    private afs: AngularFirestore,
    private _classes: ClassesService
  ) { }

  getData() { 
    this.classes = this.afs.collection(this.classCollection).valueChanges().subscribe(
      resp => {
        this.classes = resp;
        this.loadClass = true;
        console.log(this.classes);
      }
    )
    this.specs = this.afs.collection(this.specsCollection).valueChanges().subscribe(
      resp => {
        this.specs = resp;
        this.loadSpecs = true;
        console.log(this.specs);     
      }
    )
  }

  setClass(value) {
    this.filterSpecs = this.classes.filter((item) => {return (item.id==value);})[0].specs; //hace una query buscando la clase dada y luego saca sus specss
    console.log(this.filterSpecs);
  }

  setSpec(value) {
    console.log(value);
    this.afs.collection(this.specsCollection).doc(value).valueChanges()
      .subscribe(
        (resp:Character) => {
          this.character = resp;
          console.log(this.character);
        }
    )
  }

  upAttribute(attribute) {
    for(let i in this.character.attributes) {
      if (i == attribute && this.character.attributes[i] < 4 && this.maxAttPoints != 0) {
        this.character.attributes[i] = this.character.attributes[i] + 1;
        this.maxAttPoints = this.maxAttPoints - 1;
        // console.log(this.character.attributes[i]);
        // console.log('max ' + this.maxAttPoints);
      }
    }
  }

  downAttribute(attribute) {
    for(let i in this.character.attributes) {
      if (i == attribute && this.maxAttPoints != 10) {
        this.character.attributes[i] = this.character.attributes[i] - 1;
        this.maxAttPoints = this.maxAttPoints + 1;
        // console.log(this.character.attributes[i]);
        // console.log('max ' + this.maxAttPoints);
      }
    }
  }

  showChar() {
    console.log(this.character);
  }

  ngOnInit() {
    this.getData()
  }

}

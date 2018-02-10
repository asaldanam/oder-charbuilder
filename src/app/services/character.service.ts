import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpModule } from '@angular/http/src/http_module';
import { Http } from '@angular/http';



@Injectable()
export class CharacterService {

  private characterLoading:string = 'loading';
  private character:any;
  private collection:string = 'characters';

  //Armory
  private armoryUrl:string = 'https://eu.api.battle.net/wow/character/';
  private armoryRealm:string = 'los-errantes'
  private armoryCharacter:string = 'Holly';
  private armoryImg:string;

  constructor (
    private afAuth: AngularFireAuth,
    private afs:AngularFirestore,
    private jsonp:Http
  ) 
  {
  }

  newCharacter(charId) {
    console.log('new character');
    this.afs.collection(this.collection).doc(charId).set({
      name: 'Anarel'
    });
  }

  authCharacter() {
    this.characterLoading = 'loading';
    this.afAuth.authState.subscribe(
      resp => { 
        let charId = resp.email;
        this.getCharacter(charId);
        this.getArmory();
      })
  }

  getCharacter(charId) {
    this.character = this.afs.collection(this.collection).doc(charId).valueChanges();
    this.character.subscribe(
      data => {
        this.characterLoading = 'loaded';
      },
      error => {
        this.characterLoading = 'loaderror'
      }
    )
  }

  getArmory() {
    this.jsonp.get(this.armoryUrl + this.armoryRealm + '/' + this.armoryCharacter + '?locale=en_US&apikey=rcw9mw6t577etcqfe27vjsjzm98frpcs').subscribe(
      resp => {
        let img = 'https://render-eu.worldofwarcraft.com/character/' + resp.json().thumbnail;
        this.armoryImg = img.split(/(-avatar.jpg)/)[0] + '-main.jpg';
        console.log(this.armoryImg)
      }
    )
  }

}

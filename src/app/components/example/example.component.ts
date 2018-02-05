import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

export interface Item { name: string; price: number; }
export interface ItemId extends Item { id: string; }

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<ItemId[]>;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {

    this.itemsCollection = afs.collection<Item>('items'); 
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });

  }


  goto(id) {
    this.itemsCollection.doc(id).valueChanges().subscribe(
      (resp) => {
        console.log(resp);
      }
    )
  }

  
  ngOnInit() {
  }

}

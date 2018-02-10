import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AuthService } from '../../services/auth.service';

export interface Item { name: string; price: number; }
export interface ItemId extends Item { id: string; }

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(
    public _firebase: FirebaseService,
    public _auth: AuthService
  ) {}
  
  ngOnInit() {
  }

}

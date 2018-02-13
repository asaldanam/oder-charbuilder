import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.css']
})
export class CharListComponent implements OnInit {

  constructor(
    private _user:UserService
  ) { }

  ngOnInit() {
    this._user.getChars();
  }

}

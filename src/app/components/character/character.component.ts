import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(
    public _character: CharacterService,
  ) { 
  }

  ngOnInit() {
    this._character.authCharacter();
  }

}

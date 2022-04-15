import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/global';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _global : Globals
  ) { 
    console.log(this._global.user)
  }

  ngOnInit(): void {
  }

}

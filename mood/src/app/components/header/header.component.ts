import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Globals } from 'src/app/global';
import { DialogLoginComponent } from "../dialog-login/DialogLoginComponent";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private _global: Globals
  ) { }

  ngOnInit(): void {
  }

  openDialogLogin() {
    let dialogRef = this.dialog.open(DialogLoginComponent, {
      height: '450px',
      width: '600px',
    });
  }

}


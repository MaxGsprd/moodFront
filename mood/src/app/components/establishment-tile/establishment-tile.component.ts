import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishment-tile',
  templateUrl: './establishment-tile.component.html',
  styleUrls: ['./establishment-tile.component.css']
})
export class EstablishmentTileComponent implements OnInit {

  headline!: string;
  body!: string;
  note!: number;
  commentCount!: number;
  // images!: Image[];

  constructor() { }

  ngOnInit(): void {
  }

}

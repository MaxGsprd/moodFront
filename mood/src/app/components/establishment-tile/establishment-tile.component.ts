import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishment-tile',
  templateUrl: './establishment-tile.component.html',
  styleUrls: ['./establishment-tile.component.css']
})
export class EstablishmentTileComponent implements OnInit {
  title!: string;
  shortDescription!: string;
  note!: number;
  commentCount!: number;
  // images!: Image[];

  constructor() { }

  ngOnInit(): void {
    this.title = "Hello I'm a test headline !";
    this.shortDescription = "Hello again, I'm a test description !";
    this.note = 5;
    this.commentCount = 0;
  }

}

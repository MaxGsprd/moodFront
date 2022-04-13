import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.css']
})
export class EstablishmentCardComponent implements OnInit {
  title!: string;
  shortDescription!: string;
  note!: number;
  commentCount!: number;
  // images!: Image[];
  imageUrl!: string;
  headerImageUrl!: string

  constructor() { }

  ngOnInit(): void {
    this.title = "Hello I'm a test headline !";
    this.shortDescription = "Hello again, I'm a test description !";
    this.note = 5;
    this.commentCount = 0;
    this.imageUrl = "https://material.angular.io/assets/img/examples/shiba2.jpg";
    this.headerImageUrl = "https://material.angular.io/assets/img/examples/shiba1.jpg";
  }

}

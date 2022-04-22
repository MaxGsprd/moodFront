import { Component, Input, OnInit } from '@angular/core';
import { establishmentDetails } from 'src/app/models/in/establishmentDetails';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.css']
})
export class EstablishmentCardComponent implements OnInit {

  @Input() establishment!: establishmentDetails;

  // establishtitle!: string = es
  // shortDescription!: string;
  // note!: number;
  commentCount!: number;
  establishmentNote: any;
  // images!: Image[];
  imageUrl!: string;
  headerImageUrl!: string

  constructor() { }

  ngOnInit(): void {
    this.commentCount = this.establishment.comments.length;
    this.establishmentNote = isNaN(this.establishment.note.note) ? 0 : this.establishment.note.note;
    this.imageUrl = "https://material.angular.io/assets/img/examples/shiba2.jpg";
    this.headerImageUrl = "https://material.angular.io/assets/img/examples/shiba1.jpg";
  }

}

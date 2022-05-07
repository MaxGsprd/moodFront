import { Component, Input, OnInit } from '@angular/core';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.css']
})
export class EstablishmentCardComponent implements OnInit {

  @Input() establishment!: EstablishmentDetails;

  commentCount!: number;
  establishmentNote: any;
  shortDescription!: string;

  //temporary img
  establishmentImgUrl: string = "url(https://media.timeout.com/images/105860412/1024/576/image.jpg)";

  constructor() { }

  ngOnInit(): void {
    
      if (this.establishment.comments) {
        this.commentCount = this.establishment.comments.length;
      }

      this.establishmentNote = isNaN(this.establishment.note.note) ? 0 : this.establishment.note.note;


      if (this.establishment.description) {
        if (this.establishment.description.length > 300) {
          this.shortDescription = `${this.establishment.description.substring(0, 220)} [...]`;
        } else {
          this.shortDescription = this.establishment.description.toString();
        }

      }

    }
}

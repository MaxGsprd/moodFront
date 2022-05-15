import { Component, OnInit, Input } from '@angular/core';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';

@Component({
  selector: 'app-establishment-detail-card',
  templateUrl: './establishment-detail-card.component.html',
  styleUrls: ['./establishment-detail-card.component.scss']
})
export class EstablishmentDetailCardComponent implements OnInit {

  @Input() establishment!: EstablishmentDetails;
  
  public innerWidth: any;
  establishmentNote: any;
  commentCount!: number;
  maxNote: number = 5;
  noteInnerWidth:number = 0;
  establishmentImgUrl: string = "url(https://media.timeout.com/images/105860412/1024/576/image.jpg)";

  constructor() { 
  }

  ngOnInit(): void {
    this.getNotes();

    this.innerWidth = this.establishment?.note?.note;
  }


  getNotes() {
    const percentage = (this.establishment?.note?.note / this.maxNote) * 100;
    this.noteInnerWidth = percentage;// entage;
  }


}

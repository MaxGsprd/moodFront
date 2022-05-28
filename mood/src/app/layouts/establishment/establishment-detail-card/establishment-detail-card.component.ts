import { Component, OnInit, Input } from '@angular/core';
import { takeUntil } from 'rxjs';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';
import { ImageService } from 'src/app/services/image/image.service';
import { BaseComponent } from 'src/app/_shared/core/base.components';

@Component({
  selector: 'app-establishment-detail-card',
  templateUrl: './establishment-detail-card.component.html',
  styleUrls: ['./establishment-detail-card.component.scss']
})
export class EstablishmentDetailCardComponent extends BaseComponent implements OnInit {

  @Input() establishment!: EstablishmentDetails;
  
  public innerWidth: any;
  establishmentNote: any;
  commentCount!: number;
  maxNote: number = 5;
  noteInnerWidth:number = 0;

  temporary_img: string = "url(https://media.timeout.com/images/105860412/1024/576/image.jpg)";

  establishmentImgUrl: any;
  establishmentImgAlt: any;

  constructor(
    private imageService: ImageService
  ) { 
    super();
  }

  ngOnInit(): void {
    this.getNotes();
    this.extractImages();

    this.innerWidth = this.establishment?.note?.note;
  }


  getNotes() {
    const percentage = (this.establishment?.note?.note / this.maxNote) * 100;
    this.noteInnerWidth = percentage;// entage;
  }

  /**
   *  Get urlestablishment
   * @param id esteblishment ID
   */
  showImage(id: number): any {
    this.imageService.showImageById(id)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe( (data: any) => {

      this.establishmentImgUrl = data.url;
      
    });
  }
  
    /**
     * Extract all images of the establishment
     */
    extractImages() {
      if(this.establishment.images?.length != 0){
        let images = this.establishment.images;
        console.log(images)
        images?.forEach((img, index) => {
          // take the first picture
          if(index == 0)
          this.showImage(img.id);
          this.establishmentImgAlt = img.dataName;
        })
  
      } else {
        this.establishmentImgUrl = this.temporary_img;
      }
    }


}

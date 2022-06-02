import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntil } from 'rxjs';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';
import { ImageService } from 'src/app/services/image/image.service';
import { BaseComponent } from 'src/app/_shared/core/base.components';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.scss']
})
export class EstablishmentCardComponent extends BaseComponent implements OnInit {

  @Input() establishment!: EstablishmentDetails;

  commentCount!: number;
  establishmentNote: any;
  shortDescription!: string;

  //notation related variables
  maxNote: number = 5;
  noteInnerWidth:number = 0;
  moodId: string = "";

  temporary_img: string = "url(https://media.timeout.com/images/105860412/1024/576/image.jpg)";

  establishmentImgUrl: any;
  establishmentImgAlt: any;

  constructor(
    private imageService: ImageService,
    private sanitizer: DomSanitizer
  ) {
    super();
   }

  ngOnInit(): void {
    if (this.establishment.comments) {
      this.commentCount = this.establishment.comments.length;
    }
    this.getShortDescription();
    this.getNotes();
    this.extractImages();

  }


  getNotes() {
    if (this.establishment.category) {
      this.moodId = this.establishment.category.id;
    } else {
      this.moodId = "1";
    }
    const percentage = (this.establishment.note.note / this.maxNote) * 100;
    this.noteInnerWidth = percentage;
  }

  getShortDescription() {
    if (this.establishment.description) {
      if (this.establishment.description.length > 300) {
        this.shortDescription = `${this.establishment.description.substring(0, 220)} [...]`;
      } else {
        this.shortDescription = this.establishment.description.toString();
      }
    }
  }

    /**
   *  Get urlestablishment
   * @param id esteblishment ID
   */
     showImage(id: number): any {
      this.imageService.showImageById(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe( (data: any) => {
        console.log(data);
        console.log(data.url);
        let fileURL = URL.createObjectURL(data);
        console.log(fileURL);
  
        this.establishmentImgUrl = this.sanitizer.bypassSecurityTrustUrl(fileURL);

        
      });
    }

  /**
   * Extract all images of the establishment
   */
  extractImages() {
    if(this.establishment.images?.length != 0){
      let images = this.establishment.images;
      console.log(images);

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

import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from 'src/app/_shared/core/base.components';
import { EstablishmentService } from 'src/app/services/establishment/establishment.service';
import { takeUntil } from 'rxjs';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent extends BaseComponent implements OnInit  {

  public establishments: EstablishmentDetails[] = [];
  public showNavigationArrows :boolean = true;
  public showNavigationIndicators :boolean= true;

  images = [
    {
      imageSrc:
      'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'bar1',
      welcomeTxt: "Envie de sortir ?"
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'bar2',
      welcomeTxt: "Trouvez votre bar..."
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'bar3',
      welcomeTxt: "Selon votre Mood !"
    },
  ]

  constructor(config: NgbCarouselConfig, private establishmentService: EstablishmentService) {
    super();
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {

    this.getBestEstablishmentsByCategory();
  }

  /**
   * Retreive establishments having the best note in each categories.
   */
  getBestEstablishmentsByCategory() {

    this.establishmentService
      .getAllEstablishmentsChecked()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response) => {

          let categoriesArr:any = [];
          categoriesArr[1] = [];
          categoriesArr[2] = [];
          categoriesArr[3] = [];

          response.map((establishment) => {
            switch (establishment.category.id) {
              case 1:
                  categoriesArr[1].push(establishment);
                break;
              case 2:
                categoriesArr[2].push(establishment);
                break;
              case 3:
                categoriesArr[3].push(establishment);
                break;
            }
          });

          categoriesArr.forEach( (category:any) => {
            category.sort((a:any, b:any) => (a.note.note < b.note.note) ? 1 : -1);
          });
          this.establishments.push(categoriesArr[1][0],categoriesArr[2][0],categoriesArr[3][0]);
        },
        error: error => console.log(`ERROR on getBestEstablishmentsByCategory : ${error}`),
        complete: () => console.log(this.establishments)
      });
  }


}
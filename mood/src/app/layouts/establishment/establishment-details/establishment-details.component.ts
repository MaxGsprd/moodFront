import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentService } from 'src/app/services/establishment/establishment.service';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/_shared/core/base.components';

@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.component.html',
  styleUrls: ['./establishment-details.component.scss']
})
export class EstablishmentDetailsComponent extends BaseComponent implements OnInit {

  public establishment!: EstablishmentDetails;
  public establishmentId!: number;
  public similarEstablishments!: Array<EstablishmentDetails>;

  public commentCount!:any;
  public comments:any = [];
  public address: any;
  public test:any;
  
  constructor(private route: ActivatedRoute, private establishmentService: EstablishmentService) {
    super();
   }

  ngOnInit(): void {
    this.getEstablishment();
  }

  getEstablishment() {
    this.establishmentId = +this.route.snapshot.params['id'];
    
    this.establishmentService
      .getEstablishment(this.establishmentId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response) => {
          this.establishment = response;
          this.address = this.establishment?.address;
          
          if(this.establishment.comments) {
            this.commentCount = this.establishment?.comments?.length;

            this.establishment.comments.forEach( (comment:any) => {
              this.comments.push(comment);
            });
          }
          this.getSimilarCategoryEstablishments(this.establishment.category.id);
        },
        error: error => console.log(`ERROR on getEstablishment/${this.establishmentId} : ${error}`)
      });
  }

  getSimilarCategoryEstablishments(categoryId:number) {

    this.establishmentService
    .getEstablishmentsByCategory(categoryId)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: (response) => {
        this.similarEstablishments = response;
      },
      error: error => console.log(`ERROR on getEstablishmentsByCategory : ${error}`)
    })
  }
}

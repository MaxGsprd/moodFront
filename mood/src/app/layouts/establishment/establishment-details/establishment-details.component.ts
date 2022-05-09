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
  private establishmentId!: number;
  public commentCount!: number;
  public establishmentDescription!: string;
  public establishmentName!: string;
  public comments!: any;
  
  constructor(private route: ActivatedRoute, private establishmentService: EstablishmentService) {
    super();
   }

  ngOnInit(): void {
    this.getEstablishment();
    console.log(this.establishment);
  }

  getEstablishment() {
    this.establishmentId = +this.route.snapshot.params['id'];
    
    this.establishmentService
      .getEstablishment(this.establishmentId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: response => {
          this.establishment = response;
          if (this.establishment.comments) {
            this.commentCount = this.establishment.comments.length;
          }
          if (this.establishment.description) {
            this.establishmentDescription = this.establishment.description.toString();
          }
          if (this.establishment.name) {
            this.establishmentName = this.establishment.name.toString();
          }
          if (this.establishment.comments) {
            this.comments = this.establishment.comments;
          }

        },
        error: error => console.log(`ERROR on getEstablishment/${this.establishmentId} : ${error}`),
        complete: () => console.log(this.establishment)
      });
  }
  


}

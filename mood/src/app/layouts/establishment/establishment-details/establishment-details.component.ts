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
  public commentCount!: any;
  
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
          this.commentCount = this.establishment.comments?.length;
        
        },
        error: error => console.log(`ERROR on getEstablishment/${this.establishmentId} : ${error}`)
      });
  }


}

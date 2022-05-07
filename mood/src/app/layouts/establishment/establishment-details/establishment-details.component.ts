import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentService } from 'src/app/services/establishment/establishment.service';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';

@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.component.html',
  styleUrls: ['./establishment-details.component.css']
})
export class EstablishmentDetailsComponent implements OnInit {

  public establishment!: EstablishmentDetails;
  
  constructor(private route: ActivatedRoute, private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    const establishmentId = +this.route.snapshot.params['id'];

    this.establishmentService.getEstablishment(establishmentId).subscribe({
      next: (response: EstablishmentDetails) =>  {
        this.establishment = response;
        console.log(this.establishment);
      },
      error: (error) => console.log('ERROR on getAllEstablishments : ' + error),
      complete: () => console.log(`complete: establishment id=${this.establishment.id} is loaded`)
    })
  }


}

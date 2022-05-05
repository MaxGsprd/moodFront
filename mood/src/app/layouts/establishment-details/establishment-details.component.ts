import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { establishmentDetails } from 'src/app/models/in/establishmentDetails';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.component.html',
  styleUrls: ['./establishment-details.component.css']
})
export class EstablishmentDetailsComponent implements OnInit {

  public establishment!: establishmentDetails;

  constructor(private route: ActivatedRoute, private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    
    const establishmentId = +this.route.snapshot.params['id'];
    //le + permet de type caster l'id récupérée dans les paramètres de la route en type number

    this.establishmentService.getEstablishment(establishmentId).subscribe({
      next: (response: establishmentDetails) =>  {
        this.establishment = response;
        console.log(this.establishment);
      },
      error: (error) => console.log('ERROR on getAllEstablishments : ' + error),
      complete: () => console.log(`complete: establishment id=${this.establishment.id} is loaded`)
    })
  }
}

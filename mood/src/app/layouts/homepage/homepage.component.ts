import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EstablishmentIn } from 'src/app/models/in/establishment-in';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public establishments: EstablishmentIn[] = [];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {

    this.establishmentService.getAllEstablishments().subscribe({
      next: (response: EstablishmentIn[]) =>  {
        this.establishments = response;
        console.log(this.establishments);
      },
      error: (error) => console.log('ERROR on getAllEstablishments : ' + error),
      complete: () => console.log('complete : getAllEstablishments')
    })
  }

}

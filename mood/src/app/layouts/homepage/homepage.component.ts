import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Establishment } from 'src/app/models/establishment';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public establishments: Establishment[] = [];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {

    this.establishmentService.getAllEstablishments().subscribe({
      next: (response: Establishment[]) =>  {
        this.establishments = response;
        console.log(this.establishments);
      },
      error: (error) => console.log('ERROR on getAllEstablishments : ' + error),
      complete: () => console.log('complete : getAllEstablishments')
    })
  }

}

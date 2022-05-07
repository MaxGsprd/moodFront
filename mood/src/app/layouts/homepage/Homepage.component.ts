import { Component, OnInit } from '@angular/core';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';
import { EstablishmentService } from 'src/app/services/establishment/establishment.service';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
  })

export class HomepageComponent implements OnInit {

  public establishments: EstablishmentDetails[] = [];

  readonly MOOD_BEER: number = 1;
  readonly MOOD_PARTY: number = 2;
  readonly MOOD_CHILL: number = 3;

  //temporary
  user = { connected: true };
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'km';
    }

    return value;
  }
  hide = true;

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    console.log("user is:");
    console.log(this.user);

    this.establishmentService.getAllEstablishments().subscribe({
      next: (response: EstablishmentDetails[]) => {
        this.establishments = response;
        console.log(this.establishments);
      },
      error: (error) => console.log('ERROR on getAllEstablishments : ' + error),
      complete: () => console.log('complete : getAllEstablishments')
    });
  }

  onMoodClick(moodCategoryId: number) {
    console.log(`My mood is ${moodCategoryId}`);
  }

}

import { Component, OnInit } from '@angular/core';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';
import { EstablishmentService } from 'src/app/services/establishment/establishment.service';

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

  sliderValue: number = 1;
  searchByCityInput: string = "";
  searchByNameInput: string = "";

  //temporary
  user = { connected: true };
  
  constructor(private establishmentService: EstablishmentService) { }
  
  ngOnInit(): void {
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

  searchByBestNote() {
    console.log(`search by best note`);
  }

  searchCloset() {
    console.log(`search closest`);
  }

  getSliderValue() {
    console.log(`slider value is : ${this.sliderValue}`);
  }
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }
    return value;
  }

  searchByCity() {
    if (this.searchByCityInput.length > 2) {
        console.log(`Searching by city : ${this.searchByCityInput}`);
    }
  }

  searchByName() {
    if (this.searchByNameInput.length > 2) {
        console.log(`Searching by name : ${this.searchByNameInput}`);
    } 
  }
}

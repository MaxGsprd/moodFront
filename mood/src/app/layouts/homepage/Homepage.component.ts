import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';
import { EstablishmentService } from 'src/app/services/establishment/establishment.service';
import { BaseComponent } from 'src/app/_shared/core/base.components';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
  })

export class HomepageComponent extends BaseComponent implements OnInit {

  public establishments: EstablishmentDetails[] = [];
  
  public readonly MOOD_BEER: number = 1;
  public readonly MOOD_PARTY: number = 2;
  public readonly MOOD_CHILL: number = 3;

  public sliderValue: number = 1;
  public searchByCityInput: string = "";
  public searchByNameInput: string = "";

  public user = { 
    //connected : à changer quand le user sera authentifié
    connected: true,
    latitude : 0,
    longitude : 0,
  };
  
  constructor(private establishmentService: EstablishmentService) {
    super();
  }
  
  ngOnInit(): void {
    console.log(this.user);
    this.getAllEstablishments();
    this.getLocation()
      .then((response) => {
        this.user.latitude = response.latitude;
        this.user.longitude = response.longitude;
      })
      .catch(error => console.log(`Couldn't retreive user location: ${error}`))
      .finally(() => console.log(this.user));
  }

  /**
   * Retreive all establisments from back-end.
   */
  getAllEstablishments() {
    this.establishmentService
      .getAllEstablishments()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: response => this.establishments = response,
        error: error => console.log(`ERROR on getAllEstablishments : ${error}`),
        complete: () => console.log(this.establishments)
      });
  }

  /**
   * Retreive localisation : latitude and longitude of user.
   */
  getLocation():Promise<any> {
    return new Promise((resolve) =>  {
      navigator.geolocation.getCurrentPosition( (response) => {
        resolve({ latitude: response.coords.latitude, longitude: response.coords.longitude });
      });
    });
  }
  
  /**
   * Filter establishments on Mood butttons click.
   * @param  {number} moodCategoryId establishment category Id
   */
  onMoodClick(moodCategoryId: number) {
    this.establishmentService
    .getEstablishmentsByCategory(moodCategoryId)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: response => this.establishments = response,
      error: error => console.log(`ERROR on getEstablishmentsByCategory : ${error}`)
    });
  }

  /**
   * Retreive all establishments from back-end and order them by their note.
   */
  searchByBestNote() {
    this.establishmentService
    .getAllEstablishments()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: (response) => {
        response.map((establishment) => {
          if (isNaN(establishment.note.note)) establishment.note.note = 0;
        });
        //compare and sort establishment by note
        response.sort((a, b) => (a.note.note < b.note.note) ? 1 : -1)
        this.establishments = response
      },
      error: error => console.log(`ERROR on searchByBestNote : ${error}`)
    });
  }

  /**
   * Retreive, filter establishments and order them by distance.
   */
  searchCloset() {
    console.log(`search closest`);
    console.log(this.user);
  }

  /**
   * Retreive distance slider fitter value.
   */
  getSliderValue() {
    console.log(`slider value is : ${this.sliderValue}`);
    console.log(this.user);
  }

  /**
   * Return value of distance slider value rounded.
   * @param  {number} value distance slider value
   */
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }
    return value;
  }
  
  /**
   * Retreive and filter establishments within a city distance after city search input filter content.
   */
  searchByCity() {
    if (this.searchByCityInput.length > 2) {
        console.log(`Searching by city : ${this.searchByCityInput}`);
        console.log(this.user);
    }
  }

  /**
   * Retreive and filter establishments by name, or name alike.
   */
  searchByName() {
    if (this.searchByNameInput.length > 2) {
        console.log(`Searching by name : ${this.searchByNameInput}`);
        this.establishmentService
        .getEstablishmentsByName(this.searchByNameInput)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe({
          next: response => this.establishments = response,
          error: error => console.log(`ERROR on getEstablishmentsByName : ${error}`)
        });
    } 
  }

  clearFilters() {
    this.getAllEstablishments();
  }
}

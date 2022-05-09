import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { EstablishmentDetails } from 'src/app/models/out/EstablishmentDetails';
import { EstablishmentService } from 'src/app/services/establishment/establishment.service';
import { BaseComponent } from 'src/app/_shared/core/base.components';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
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
    this.getAllestablishment();

    /*this.establishmentService.getAllEstablishments().subscribe({
      next: (response: establishmentDetails[]) => {
        this.establishments = response;
        console.log(this.establishments);
      },
      error: (error) => console.log('ERROR on getAllEstablishments : ' + error),
      complete: () => console.log('complete : getAllEstablishments')
    });*/
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

  searchByBestNote() {

  }

  onMoodClick(MOOD_CHILL: any): any {

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

  getAllestablishment(): any {
    this.establishmentService.getAllEstablishments()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.establishments = data;
        console.log(this.establishments);
      });
  }

  clearFilters() {
    this.getAllestablishment();
  }
}

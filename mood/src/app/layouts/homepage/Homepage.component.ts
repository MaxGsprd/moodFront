import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { establishmentDetails } from 'src/app/models/in/establishmentDetail';
import { EstablishmentService } from 'src/app/services/establishment/establishment.service';
import { BaseComponent } from 'src/app/_shared/core/base.components';


@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
  })

export class HomepageComponent extends BaseComponent implements OnInit  {

  public establishments: establishmentDetails[] = [];

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

  constructor(private establishmentService: EstablishmentService) { 
    super();
  }

  ngOnInit(): void {
    console.log("user is:");
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

  onMoodClick(moodCategoryId: number) {
    console.log(`My mood is ${moodCategoryId}`);
  }

  getAllestablishment(): any {
    this.establishmentService.getAllEstablishments()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.establishments = data;
        console.log(this.establishments);
      });
  }

}

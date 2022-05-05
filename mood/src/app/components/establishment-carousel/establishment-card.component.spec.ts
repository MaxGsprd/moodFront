import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentCarouselComponent } from './establishment-carousel.component';

describe('EstablishmentCarouselComponent', () => {
  let component: EstablishmentCarouselComponent;
  let fixture: ComponentFixture<EstablishmentCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

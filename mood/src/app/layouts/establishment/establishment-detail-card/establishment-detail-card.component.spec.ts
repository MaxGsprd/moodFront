import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentDetailCardComponent } from './establishment-detail-card.component';

describe('EstablishmentDetailCardComponent', () => {
  let component: EstablishmentDetailCardComponent;
  let fixture: ComponentFixture<EstablishmentDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentDetailCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

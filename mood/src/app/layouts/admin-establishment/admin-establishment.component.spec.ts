import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEstablishmentComponent } from './admin-establishment.component';

describe('AdminEstablishmentComponent', () => {
  let component: AdminEstablishmentComponent;
  let fixture: ComponentFixture<AdminEstablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEstablishmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

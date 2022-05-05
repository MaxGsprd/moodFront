import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentCommentsComponent } from './establishment-comments.component';

describe('EstablishmentCommentsComponent', () => {
  let component: EstablishmentCommentsComponent;
  let fixture: ComponentFixture<EstablishmentCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

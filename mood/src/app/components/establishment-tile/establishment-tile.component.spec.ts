import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentTileComponent } from './establishment-tile.component';

describe('EstablishmentTileComponent', () => {
  let component: EstablishmentTileComponent;
  let fixture: ComponentFixture<EstablishmentTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

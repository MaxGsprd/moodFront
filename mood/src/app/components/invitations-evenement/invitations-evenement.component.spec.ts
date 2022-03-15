import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationsEvenementComponent } from './invitations-evenement.component';

describe('InvitationsEvenementComponent', () => {
  let component: InvitationsEvenementComponent;
  let fixture: ComponentFixture<InvitationsEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationsEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationsEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

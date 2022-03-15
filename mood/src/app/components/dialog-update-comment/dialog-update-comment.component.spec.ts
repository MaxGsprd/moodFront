import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateCommentComponent } from './dialog-update-comment.component';

describe('DialogUpdateCommentComponent', () => {
  let component: DialogUpdateCommentComponent;
  let fixture: ComponentFixture<DialogUpdateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

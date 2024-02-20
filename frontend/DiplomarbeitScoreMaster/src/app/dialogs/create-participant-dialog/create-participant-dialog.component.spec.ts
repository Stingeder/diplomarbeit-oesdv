import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParticipantDialogComponent } from './create-participant-dialog.component';

describe('CreateParticipantDialogComponent', () => {
  let component: CreateParticipantDialogComponent;
  let fixture: ComponentFixture<CreateParticipantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateParticipantDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateParticipantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

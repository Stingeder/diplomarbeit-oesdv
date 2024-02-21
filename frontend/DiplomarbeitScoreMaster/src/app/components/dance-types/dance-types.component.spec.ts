import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceTypesComponent } from './dance-types.component';

describe('DanceTypesComponent', () => {
  let component: DanceTypesComponent;
  let fixture: ComponentFixture<DanceTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanceTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

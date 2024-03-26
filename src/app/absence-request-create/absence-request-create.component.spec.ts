import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceRequestCreateComponent } from './absence-request-create.component';

describe('AbsenceRequestCreateComponent', () => {
  let component: AbsenceRequestCreateComponent;
  let fixture: ComponentFixture<AbsenceRequestCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceRequestCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbsenceRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

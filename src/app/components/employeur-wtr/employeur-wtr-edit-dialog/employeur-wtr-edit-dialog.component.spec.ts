import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeurWtrEditDialogComponent } from './employeur-wtr-edit-dialog.component';

describe('EmployeurWtrEditDialogComponent', () => {
  let component: EmployeurWtrEditDialogComponent;
  let fixture: ComponentFixture<EmployeurWtrEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeurWtrEditDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeurWtrEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

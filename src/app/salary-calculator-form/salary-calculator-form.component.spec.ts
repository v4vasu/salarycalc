import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCalculatorFormComponent } from './salary-calculator-form.component';

describe('SalaryCalculatorFormComponent', () => {
  let component: SalaryCalculatorFormComponent;
  let fixture: ComponentFixture<SalaryCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryCalculatorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

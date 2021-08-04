import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface IBorrower{
  name: string;
  frequencyType: string;
  hasHourly: boolean;
  numberOfhours: number | null,
  income: string;
  total: number| null;
}

@Component({
  selector: 'salary-calculator-form',
  templateUrl: './salary-calculator-form.component.html',
  styleUrls: ['./salary-calculator-form.component.scss']
})
export class SalaryCalculatorFormComponent implements OnInit {

  borrowerList: IBorrower[] = [
    {name: 'John Wick', frequencyType: 'yearly', hasHourly: false, numberOfhours: 0, income: '', total: 0},
    {name: 'Harvey Spector', frequencyType: 'monthly', hasHourly: false, numberOfhours: 0, income: '', total: 0}
  ];

  frequencyOptionList = [
    {key:'yearly', value: 'Yearly'},
    {key:'monthly', value: 'Monthly'},
    {key:'hourly', value: 'Hourly'},
    {key:'weekly', value: 'Weekly'},
    {key:'biWeekly', value: 'Bi-Weekly'},
    {key:'semimonthly', value: 'Semi Monthly'}
  ];

  salaryCalcForm: any;
  borrowers: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.salaryCalcForm = this.fb.group({
      borrowers: this.fb.array([])
    });

    this.borrowerList.forEach((blist)=>{
      let borrows =this.salaryCalcForm.get("borrowers") as FormArray;
      borrows.push(this.fb.group({
        name: [blist.name],
        frequencyType: [blist.frequencyType],
        hasHourly: [blist.hasHourly],
        numberOfhours: [blist.numberOfhours],
        income: [blist.income, [Validators.required]],
        total: [blist.total]
      }));
    });

    this.borrowers = this.salaryCalcForm.get("borrowers") as FormArray;

  }


  setBorrowerFrequency(index: number){
    let fCtrls = this.borrowers.controls[index].controls;
    let frequencyType = fCtrls.frequencyType.value;
    if(frequencyType === 'hourly'){
      fCtrls.hasHourly.patchValue(true);
    }else{
      fCtrls.hasHourly.patchValue(false);
    }
    this.calculateIncome(index);
  }

  calculateIncome(index:number){
    let fCtrls = this.borrowers.controls[index].controls;
    let frequencyType = fCtrls.frequencyType.value;
    let income = fCtrls.income.value;
    let numberOfhours = fCtrls.numberOfhours.value;

    if(frequencyType === 'yearly'){
      fCtrls.total.patchValue(Number(income) / 12);
    } else if(frequencyType === 'hourly'){
      if(income === 0){
        fCtrls.total.patchValue(`$0`);
      }else{
        fCtrls.total.patchValue(`$ ${(Number(income) * Number(numberOfhours) * 52 / 12)}`);
      }
    } else if(frequencyType === 'monthly'){
      fCtrls.total.patchValue(Number(income));
    } else if(frequencyType=== 'weekly'){
      fCtrls.total.patchValue(Number(income) * 52 / 12);
    } else if(frequencyType === 'biWeekly'){
      fCtrls.total.patchValue(Number(income) * 26 / 12);
    } else if(frequencyType === 'semimonthly'){
      fCtrls.total.patchValue(Number(income) * 2);
    }

  }

  hasHourlySelected(index: number){
    let fCtrls = this.borrowers.controls[index].controls;
    return fCtrls.hasHourly.value;
  }

  getCurrentValue(index: number, fieldName: string){
    let fCtrls = this.borrowers.controls[index].controls;
    return fCtrls[fieldName].value;
  }


  calculateHourlyIncome(index: number){
    let fCtrls = this.borrowers.controls[index].controls;
    let frequencyType = fCtrls.frequencyType.value;
    let income = fCtrls.income.value;
    let numberOfhours = fCtrls.numberOfhours.value;

    if(frequencyType === 'hourly'){
      fCtrls.total.patchValue(Number(income) * Number(numberOfhours) * 52 / 12);
    }
  }



}

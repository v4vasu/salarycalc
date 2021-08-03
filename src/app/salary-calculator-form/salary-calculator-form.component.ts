import { Component, OnInit } from '@angular/core';

export interface IBorrower{
  name: string;
  frequencyType: string;
  hasHourly: boolean;
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
    {name: 'John Wick', frequencyType: '', income: '', hasHourly: false, total: 0},
    {name: 'Harvey Spector', frequencyType: '', hasHourly: false, income: '', total: 0}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setBorrowerFrequency(value: any, borrower: IBorrower){
    console.log(value);
    borrower.frequencyType = value;
    if(borrower.frequencyType === 'hourly'){
      borrower.hasHourly = true;
    }
    console.log(borrower)
  }

  calculateIncome(event:any,borrower: IBorrower){
    console.log(borrower);
    if(borrower.frequencyType === 'yearly'){
      borrower.total = Number(event.target.value) / 12;
    }
    else{
      borrower.total = Number(event.target.value);
    }

  }

}

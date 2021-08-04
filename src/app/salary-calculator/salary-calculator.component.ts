import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.scss']
})
export class SalaryCalculatorComponent implements OnInit {

  showCalcPopup: boolean = false;
  copyJob: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  showSalaryCalc(){
    console.log('show popup');
    this.showCalcPopup = true;
  }

  // doSubmit(){

  // }

}

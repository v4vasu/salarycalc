import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup-modal/popup.service';

@Component({
  selector: 'salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.scss']
})
export class SalaryCalculatorComponent implements OnInit {

  showCalcPopup: boolean = false;
  copyJob: boolean = false;


  constructor(private _popupService: PopupService) { }

  ngOnInit(): void {
    this._popupService.getPopupStatus().subscribe((data)=> {
      this.showCalcPopup = data;
    });
  }

  showSalaryCalc(){
    console.log('show popup');
    this._popupService.setPopupStatus(true);
  }

  // doSubmit(){

  // }

}

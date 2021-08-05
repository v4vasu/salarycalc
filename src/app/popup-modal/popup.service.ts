import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  private isPopupSubmitted$ = new BehaviorSubject<boolean>(false);
  private showPopup$ = new BehaviorSubject<boolean>(false);

  setPopupSubmitStatus(data:boolean){
    this.isPopupSubmitted$.next(data);
  }

  getPopupSubmitStatus(){
    return this.isPopupSubmitted$.asObservable();
  }

  setPopupStatus(data:boolean){
    this.showPopup$.next(data);
  }

  getPopupStatus(){
    return this.showPopup$.asObservable();
  }

}

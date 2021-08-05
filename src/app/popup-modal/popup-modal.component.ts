import { Component, OnInit, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit, OnDestroy {

  constructor(private _elem: ElementRef, private _popupService: PopupService) { }

  ngOnInit(): void {
    document.body.appendChild(this._elem.nativeElement);
  }

  closePopupModal(){
    this._popupService.setPopupStatus(false);
  }

  submitPopup(){
    this._popupService.setPopupSubmitStatus(true);
  }

  ngOnDestroy(){
    this._elem.nativeElement.remove();
  }

}

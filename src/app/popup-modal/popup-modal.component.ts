import { Component, OnInit, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit, OnDestroy {

  @Output() closeModal = new EventEmitter();
  //@Output() doAction = new EventEmitter();

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.elem.nativeElement);
  }

  closePopupModal(){
    this.closeModal.emit();
  }

  // doaction(){
  //   this.doAction.emit();
  // }

  ngOnDestroy(){
    this.elem.nativeElement.remove();
  }

}

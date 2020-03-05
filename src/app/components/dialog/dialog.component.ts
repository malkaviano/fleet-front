import { Component, OnInit,EventEmitter, Output } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.notifyParent.emit(false);

    this.close();
  }

  confirm(): void {
    this.notifyParent.emit(true);

    this.close();
  }

  private close(): void {
    this.bsModalRef.hide();
  }
}
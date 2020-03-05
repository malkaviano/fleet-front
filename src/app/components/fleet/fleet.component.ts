import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { faEdit, faEraser } from '@fortawesome/free-solid-svg-icons';

import { Vehicle } from '../../models/vehicle.model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {
  public faEdit = faEdit;
  public faEraser = faEraser;
  public title = 'Fleet';
  public dialogRef: BsModalRef;

  public fleet: Vehicle[];

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private http: HttpClient,
    @Inject('VEHICLE_URL') private url: string
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.http.get(this.url).subscribe(
      done => {
        const r: Vehicle[] = [];

        for (const obj of (done as any[])) {
          r.push({
            series: obj['chassisId']['series'],
            number: obj['chassisId']['number'],
            type: obj['type'],
            color: obj['color'],
            passengers: obj['passengers']
          });
        }

        this.fleet = r;
      },
      err => console.error(err)
    );
  }

  create() {
    this.router.navigate(['/form']);
  }

  edit(series: string, number: number) {
    this.router.navigate(['/form', {
      update: true,
      series,
      number
    }]);
  }

  delete(series: string, number: number) {
    this.http.delete(`${this.url}/${series}/${number}`).subscribe(
      done => this.load(),
      err => console.error(err)
    );
  }

  openDialog(series: string, number: number) {
    this.dialogRef = this.modalService.show(DialogComponent);

    this.dialogRef.content.notifyParent.subscribe((result) => {
      if (result) {
        this.delete(series, number);
      }
    });
  }
}

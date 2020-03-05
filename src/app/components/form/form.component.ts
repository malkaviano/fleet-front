import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public title = 'Vehicle';
  public update: boolean;
  public form: any;

  constructor(
    private http: HttpClient,
    @Inject('VEHICLE_URL') private url: string,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.form = {
      series: '',
      number: '',
      type: '',
      color: '',
      passengers: ''
    }
  }

  ngOnInit(): void {
    this.update = !!this.route.params.subscribe(
      params => {
        this.update = params['update'];

        if (this.update) {
          const series = params['series'];
          const number = params['number'];

          this.http.get(`${this.url}/${series}/${number}`).subscribe(
            done => this.form = {
              series: done['chassisId']['series'],
              number: done['chassisId']['number'],
              type: done['type'],
              color: done['color'],
              passengers: done['passengers']
            },
            err => this.toastr.error("Error loading the vehicle")
          );
        }
      }
    );
  }

  submit(values: any) {
    if (this.update) {
      this.http.put(
        this.url,
        {
          "series": this.form['series'],
          "number": this.form['number'],
          "color": values['color']
        }
      ).subscribe(
        done => this.toastr.success("Vehicle color changed"),
        err => this.toastr.error("Error changing vehicle color")
      );
    } else {
      this.http.post(
        this.url,
        {
          "series": values['series'],
          "number": values['number'],
          "color": values['color'],
          "type": values['type']
        }
      ).subscribe(
        done => this.toastr.success("Vehicle created"),
        err => this.toastr.error("Error creating vehicle")
      );
    }
  }
}

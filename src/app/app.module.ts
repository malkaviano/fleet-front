import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { TitleComponent } from './components/title/title.component';
import { FormComponent } from './components/form/form.component';
import { DialogComponent } from './components/dialog/dialog.component';

const ADDRESS = 'localhost:8080';
const VEHICLE_URL = `http://${ADDRESS}/api/vehicle`;

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FleetComponent,
    TitleComponent,
    FormComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: 'VEHICLE_URL', useValue: VEHICLE_URL },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

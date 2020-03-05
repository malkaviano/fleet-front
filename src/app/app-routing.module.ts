import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FleetComponent } from './components/fleet/fleet.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: 'fleet', component: FleetComponent },
  { path: 'form', component: FormComponent },
  { path: '',
    redirectTo: '/fleet',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/fleet' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

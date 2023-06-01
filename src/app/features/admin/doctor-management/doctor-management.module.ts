import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorManagementRoutingModule } from './doctor-management-routing.module';
import { DoctorManagementComponent } from './doctor-management.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    DoctorManagementComponent
  ],
  imports: [
    CommonModule,
    DoctorManagementRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ]
})
export class DoctorManagementModule { }

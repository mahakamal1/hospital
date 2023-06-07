import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseRoutingModule } from './nurse-routing.module';
import { NurseComponent } from './nurse.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrentPatientsComponent } from './components/current-patients/current-patients.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    NurseComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    CurrentPatientsComponent
  ],
  imports: [
    CommonModule,
    NurseRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ]
})
export class NurseModule { }

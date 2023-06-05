import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseRoutingModule } from './nurse-routing.module';
import { NurseComponent } from './nurse.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NurseComponent,
    ChangePasswordComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    NurseRoutingModule,
    ReactiveFormsModule
  ]
})
export class NurseModule { }

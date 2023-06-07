import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserReservationComponent } from './components/user-reservation/user-reservation.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    UserReservationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AddPlanComponent } from './components/add-plan/add-plan.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlansComponent } from './components/plans/plans.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    DoctorComponent,
    ChangePasswordComponent,
    AddPlanComponent,
    EditProfileComponent,
    PlansComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule
  ]
})
export class DoctorModule { }

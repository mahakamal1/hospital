import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseManagementsRoutingModule } from './nurse-managements-routing.module';
import { NurseManagementsComponent } from './nurse-managements.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NurseManagementsComponent
  ],
  imports: [
    CommonModule,
    NurseManagementsRoutingModule,
    FontAwesomeModule,
    SweetAlert2Module,
    ReactiveFormsModule
  ]
})
export class NurseManagementsModule { }

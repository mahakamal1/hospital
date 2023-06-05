import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FindDoctorComponent } from './components/find-doctor/find-doctor.component';
import { FindDoctor2Component } from './components/find-doctor2/find-doctor2.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SolutionsComponent,
    FindDoctorComponent,
    FindDoctor2Component,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    NgbCarouselModule
  ],
  providers:[

  ]
})
export class HomeModule { }

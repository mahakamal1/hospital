import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FindDoctorComponent } from './components/find-doctor/find-doctor.component';
import { FindDoctor2Component } from './components/find-doctor2/find-doctor2.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { ClinicDetailsComponent } from './components/clinic-details/clinic-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SolutionsComponent,
    FindDoctorComponent,
    FindDoctor2Component,
    ReviewsComponent,
    ClinicsComponent,
    ClinicDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    CarouselModule
  ],
  providers:[

  ]
})
export class HomeModule { }

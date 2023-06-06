import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ClinicDetailsComponent } from './components/clinic-details/clinic-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'clinic/:id',component:ClinicDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

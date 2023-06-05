import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddPlanComponent } from './components/add-plan/add-plan.component';
import { PlansComponent } from './components/plans/plans.component';

const routes: Routes = [
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'editProfile',component:EditProfileComponent},
  {path:'addPlan',component:AddPlanComponent},
  {path:'plans',component:PlansComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }

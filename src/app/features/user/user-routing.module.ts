import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UserReservationComponent } from './components/user-reservation/user-reservation.component';

const routes: Routes = [
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'userReservation',component:UserReservationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

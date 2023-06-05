import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseComponent } from './nurse.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component: NurseComponent },
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'editProfile',component:EditProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NurseRoutingModule { }

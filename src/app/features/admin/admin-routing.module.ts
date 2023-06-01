import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'doctors', loadChildren: () => import('./doctor-management/doctor-management.module').then(m => m.DoctorManagementModule) },
  { path: 'nurse', loadChildren: () => import('./nurse-managements/nurse-managements.module').then(m => m.NurseManagementsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

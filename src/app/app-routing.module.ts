import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './core/guards/auth.guard';
import { doctorGuard } from './core/guards/doctor.guard';
import { nurseGuard } from './core/guards/nurse.guard';
import { patientGuard } from './core/guards/patient.guard';
const routes: Routes = [
{path:'',pathMatch:'full',redirectTo:'Home'},
{ path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
{ path: 'Admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },//canActivate:[adminGuard]
{ path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)},//canActivate:[patientGuard]
{ path: 'Home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
{ path: 'doctor', loadChildren: () => import('./features/doctor/doctor.module').then(m => m.DoctorModule) },//,canActivate:[doctorGuard]
{ path: 'nurse', loadChildren: () => import('./features/nurse/nurse.module').then(m => m.NurseModule)}//,canActivate:[nurseGuard]
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },

{ path: 'Admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) }

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

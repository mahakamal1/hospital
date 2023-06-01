import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseManagementsComponent } from './nurse-managements.component';

const routes: Routes = [{ path: '', component: NurseManagementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NurseManagementsRoutingModule { }

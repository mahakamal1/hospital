import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent implements OnInit{
  addPlanForm!:FormGroup
   token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
   id = this.token['UserId']
   today=new Date()
  constructor(
    private _doctorService:DoctorService,
    private _jwtService:JwtDecodeService,
    private _fb:FormBuilder,
    private _toastrService:ToastrService
  ) {
  }

  createForm(){
    this.addPlanForm = this._fb.group({
      date: [,Validators.required],
      from:[,Validators.required],
      to: [,Validators.required],
      doctorId: [this.id]
    })
  }

  add(){
    this._doctorService.addPlan(this.addPlanForm.value).subscribe((data)=>{
      this._toastrService.success('Added Successfully')
    })
  }
  ngOnInit(): void {
    this.createForm()
  }

}

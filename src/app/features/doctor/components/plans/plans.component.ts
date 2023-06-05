import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';
import { getDoctorPlans, patientPlan } from '../../models/models';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit{
  doctorPlans!:getDoctorPlans[]
  token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
  id = this.token['UserId']
  patientPlan!:patientPlan[]
  constructor(
    private _doctorServices:DoctorService,
    private _jwtService:JwtDecodeService
    ) {

  }

  getDoctorPlans(){
    this._doctorServices.getDoctorPlans(this.id).subscribe((data)=>{
      this.doctorPlans = data
      console.log(data)
    })
  }

  seePatients(id:number){
    this._doctorServices.getPlanPatient(id).subscribe((data)=>{
      this.patientPlan = data
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.getDoctorPlans()
  }

}

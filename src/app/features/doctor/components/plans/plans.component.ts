import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';
import { getById, getCurrentPlanPatient, getDoctorPlans, patientPlan } from '../../models/models';
import { faCalendarDays, faEye } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit{
  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;
  doctorPlans!:getDoctorPlans[]
  token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
  id = this.token['UserId']
  patientPlan!:patientPlan[]
  responsiveOptions!: any[] ;
  eye=faEye
  calender=faCalendarDays
  doctorData!:getById
  modaltitle!:string
  getCurrentPlanPatient!:getCurrentPlanPatient[]
  constructor(
    private _doctorServices:DoctorService,
    private _jwtService:JwtDecodeService,
    private _modalService: NgbModal
    ) {



  }

  getDoctorPlans(){
    this._doctorServices.getDoctorPlans(this.id).subscribe((data)=>{
      this.doctorPlans = data
      console.log(data)
    })
  }

  arrived(reservatioid:number){
    this._doctorServices.arrivalPatient(reservatioid).subscribe((data)=>{
      console.log(data)
      this.mySwal.fire()
      this.getUserData()

    })
  }

  seePatients(id:number){
    this._doctorServices.getPlanPatient(id).subscribe((data)=>{
      this.patientPlan = data
      console.log(data)
    })
  }

  getUserData(){
    let token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
    let id = token['UserId']
    if(token){
      this._doctorServices.GetById(id).subscribe((data)=>{
        console.log(data)
        this.doctorData = data
      })
      this._doctorServices.getCurrentPlanPatient(id).subscribe((data)=>{
        this.getCurrentPlanPatient = data
      })
    }
  }

  openLg(content: any,planId:number,planDate:string) {
    this._doctorServices.getPlanPatient(planId).subscribe((data)=>{
      this.patientPlan = data
      this.modaltitle = new Date(planDate).toDateString()
      this._modalService.open(content, { size: 'lg',centered:true });
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.getUserData()
    this.getDoctorPlans()
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}

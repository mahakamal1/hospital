import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { getClinicdoctor } from '../../models/models';
import { DoctorService } from 'src/app/features/doctor/services/doctor.service';
import { getDoctorPlans } from 'src/app/features/doctor/models/models';
import { faCalendarDays, faEye, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.scss']
})
export class ClinicDetailsComponent implements OnInit{
  id!:number
  doctorsData!:getClinicdoctor
  doctorPlans!:getDoctorPlans[]
  responsiveOptions!: any[] ;
  eye=faMoneyCheck
  calender=faCalendarDays
  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;
  constructor(
    private _route:ActivatedRoute,
    private _homeService:HomeService,
    private _doctorServices:DoctorService,
    private _jwtService:JwtDecodeService,
    private _router:Router
  ) {

  }

  getClinicDetails(id:number){
    this._homeService.getClinicdoctor(id).subscribe((data)=>{
      this.doctorsData = data
      this._doctorServices.getDoctorPlans(data.id).subscribe((data)=>{
        this.doctorPlans = data
        console.log(data)
      })
      console.log(data)
    })
  }

  book(planId:number){

    if(localStorage.getItem('currentClientUser')){
      let token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
      let id = token['UserId']
      let role = token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      if(token && role === 'Patient'){
        let obj = {
          planId: planId,
          patientId: id
        }
        this._homeService.reservation(obj).subscribe((data)=>{
          this.mySwal.fire()
        })
      }
    }else{
      this._router.navigate(['/auth/login'])
    }
  }
  ngOnInit(): void {
    this.id = Number(this._route.snapshot.paramMap.get('id'))
    this.getClinicDetails(this.id)
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

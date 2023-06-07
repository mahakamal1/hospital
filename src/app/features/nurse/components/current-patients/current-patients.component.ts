import { Component, OnInit, ViewChild } from '@angular/core';
import { currentReservation } from '../../models/models';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';
import { NurseService } from '../../services/nurse.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-current-patients',
  templateUrl: './current-patients.component.html',
  styleUrls: ['./current-patients.component.scss']
})
export class CurrentPatientsComponent implements OnInit {
  currentReservation!:currentReservation[]
  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;
  constructor(
    private _jwtService:JwtDecodeService,
    private _nurseService:NurseService
  ) {

  }

  getCurrentReservation(){
    let token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
    let id = token['UserId']
    this._nurseService.getCurrentPatient(id).subscribe((data)=>{
      this.currentReservation = data
    })
  }

  arrived(reservatioid:number){
    this._nurseService.Arrives(reservatioid).subscribe((data)=>{
      console.log(data)
      this.mySwal.fire()
      this.getCurrentReservation()

    })
  }

  ngOnInit(): void {
    this.getCurrentReservation()
  }

}

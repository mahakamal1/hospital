import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';
import { getPatientReservation } from '../../models/models';

@Component({
  selector: 'app-user-reservation',
  templateUrl: './user-reservation.component.html',
  styleUrls: ['./user-reservation.component.scss']
})
export class UserReservationComponent implements OnInit{
  reservationArr!:getPatientReservation[]

  constructor(
    private _userService:UserService,
    private _jwtService:JwtDecodeService
  ) {


  }

  reservation(){
     if(localStorage.getItem('currentClientUser')){
      let token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
      let id = token['UserId']
      let role = token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      this._userService.GetPatientReservation(id).subscribe((data)=>{
        this.reservationArr = data
      })
     }
  }

  ngOnInit(): void {
    this.reservation()
  }

}

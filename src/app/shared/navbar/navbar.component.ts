import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isAdminUserLoghedIn:boolean = false
  login=faArrowRightToBracket
  logoutIcon=faArrowRightFromBracket
  name!:string
  token!:any
  role!:string
  constructor(
    private _authService:AuthService,
    private _router:Router,
    private _jwtServices:JwtDecodeService
  ) {
    if(localStorage.getItem('currentClientUser')){
      this.token  = this._jwtServices.DecodeToken(String(localStorage.getItem('currentClientUser')));
      this.role = this.token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    }
    else{
      this.token = ''
    }
  }

  changePassword(){
    if(this.token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']==='Admin'){
    //this._router.navigate(['/'])
    }else if(this.token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']==='Doctor')
    {
      this._router.navigate(['/doctor/changePassword'])
    }
    else if(this.token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']==='Nurse'){
      this._router.navigate(['/nurse/changePassword'])
    }else{
      this._router.navigate(['/user/changePassword'])
    }
  }

  editProfile(){
    if(this.token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']==='Admin'){
    //this._router.navigate(['/'])
    }else if(this.token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']==='Doctor')
    {
      this._router.navigate(['/doctor/editProfile'])
    }
    else if(this.token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']==='Nurse'){
      this._router.navigate(['/nurse/editProfile'])
    }else{
      this._router.navigate(['/user/editProfile'])
    }
  }


  addPlans(){
    this._router.navigate(['/doctor/addPlan'])
  }

  viewProfile(){
    this._router.navigate(['/doctor/plans'])
  }

  logout(){
    this._authService.logout()
    this._router.navigate(['/'])
  }

  viewReservation(){
    this._router.navigate(['/user/userReservation'])
  }

  viewCurrentReservation(){
    this._router.navigate(['/nurse/currentPatients'])
  }

  ngOnInit(): void {
    if(localStorage.getItem('currentClientUser')){
      this.isAdminUserLoghedIn = true;
      this.name = this.token['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    }else{
      this.isAdminUserLoghedIn = false;
    }
  }

}

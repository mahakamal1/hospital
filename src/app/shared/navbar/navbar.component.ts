import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
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
  constructor(
    private _authService:AuthService,
    private _router:Router
  ) {

  }

  logout(){
    this._authService.logout()
    this._router.navigate(['/'])
  }

  ngOnInit(): void {
    if(localStorage.getItem('currentClientUser')){
      this.isAdminUserLoghedIn = true;
    }else{
      this.isAdminUserLoghedIn = false;
    }
  }

}

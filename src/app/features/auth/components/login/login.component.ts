import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup
  constructor(
    private _authService:AuthService,
    private _fb:FormBuilder,
    private _toastrService:ToastrService,
    private _route:Router,
    private _jwtService:JwtDecodeService,
  ) {
  }

  createForm(){
    this.loginForm = this._fb.group({
      userName:[,[Validators.required]],
      password:[,[Validators.required]]
    })
  }

  login(){
    this._authService.login(this.loginForm.value).subscribe((data)=>{
      this._toastrService.success('Welcome Back')
      let token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
      let role = token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      if(role=='Admin'){
        this._route.navigate(['/Admin'])
      }else if(role=='Doctor'){
        this._route.navigate(['/doctor/plans'])
      }else if(role=='Patient'){
        this._route.navigate(['/'])
      }else if(role=='Nurse'){
        this._route.navigate(['/nurse/currentPatients'])
      }
  })
  }

  ngOnInit(): void {
    this.createForm()
  }

}

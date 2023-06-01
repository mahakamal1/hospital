import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
    private _route:Router
  ) {
  }

  createForm(){
    this.loginForm = this._fb.group({
      userName:[,[Validators.required]],
      password:[,[Validators.required]]
    })
  }

  login(){
    localStorage.setItem('currentClientUser','test')
    console.log(this.loginForm.value)
    this._authService.login(this.loginForm.value).subscribe((data)=>{
      console.log(typeof(data))
      this._toastrService.success('Welcome Back')
      this._route.navigate(['/Admin'])
  })
  }

  ngOnInit(): void {
    this.createForm()
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!:FormGroup
  constructor(
    private _fb:FormBuilder,
    private _userService:UserService,
    private _toastrService:ToastrService,
    private _authService:AuthService,
    private _router:Router
  ) {


  }

  createForm(){
    this.changePasswordForm = this._fb.group({
      oldPassword:[,[Validators.required]],
      newPassword:[,[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmNewPassword:[,[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
    })
  }


  get f(){
    return this.changePasswordForm.controls
  }

  changePassword(){
    this._userService.ChangePassword(this.changePasswordForm.value).subscribe((data)=>{
      this._toastrService.success('Updated')
      //this._authService.logout()
    })
  }
  ngOnInit(): void {
    this.createForm()

  }
}

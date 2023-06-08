import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup

  constructor(
    private _fb:FormBuilder,
    private _authService:AuthService,
    private _toastrService:ToastrService,
    private _router:Router
  ) {

  }

  createform(){
    this.registerForm = this._fb.group({
      userName:[,[Validators.required,Validators.minLength(4)]],
      name:[,[Validators.required,Validators.minLength(4)]],
      email:[,[Validators.required,Validators.email]],
      password:[,[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      phone:[,[Validators.required]],
      age:[,[Validators.required]]
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  register(){
    this._authService.register(this.registerForm.value).subscribe((data)=>{
      this._toastrService.success(data)
      this._router.navigate(['/auth/login'])
    })
  }

  ngOnInit(): void {
    this.createform()
  }

}

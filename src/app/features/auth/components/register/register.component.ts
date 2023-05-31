import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup

  constructor(
    private _fb:FormBuilder
  ) {

  }

  createform(){
    this.registerForm = this._fb.group({
      userName:[,[Validators.required]],
      email:[,[Validators.required]],
      password:[,[Validators.required]],
      phone:[,[Validators.required]]
    })
  }

  register(){

  }

  ngOnInit(): void {
    this.createform()
  }

}
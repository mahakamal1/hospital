import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit{
  editForm!:FormGroup

  constructor(
    private _doctorService:DoctorService,
    private _jwtService:JwtDecodeService,
    private _fb:FormBuilder,
    private _toastrServices:ToastrService
  ) {

  }

  createForm(){
    this.editForm = this._fb.group({
      id: [0],
      age: [,[Validators.required]],
      name: [,[Validators.required]],
      description: [,[Validators.required]],
      specialization: [,[Validators.required]],
      about: [,[Validators.required]],
      clinicId: [0,[Validators.required]]
    })
  }

  getUserData(){
    let token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
    let id = token['UserId']
    if(token){
      this._doctorService.GetById(id).subscribe((data)=>{
        console.log(data)
        this.editForm.setValue({
          id: data.id,
          age: data.age,
          name: data.name,
          description: data.description,
          specialization: data.specialization,
          about: data.about,
          clinicId: data.clinicId
        })
      })
    }
  }

  update(){
    this._doctorService.editProfile(this.editForm.value).subscribe((data)=>{
      this._toastrServices.success('Updated')
      this.getUserData()
    })
  }
  ngOnInit(): void {
    this.createForm()
    this.getUserData()
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NurseService } from '../../services/nurse.service';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/core/services/core.service';
import { clinic } from 'src/app/core/models/models';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  editForm!:FormGroup
  clinics!:clinic[]

  constructor(
    private _nurseService:NurseService,
    private _jwtService:JwtDecodeService,
    private _fb:FormBuilder,
    private _toastrServices:ToastrService,
    private _coreService:CoreService
  ) {

  }

  createForm(){
    this.editForm = this._fb.group({
      id: [0],
      age: [,[Validators.required]],
      name: [,[Validators.required]],
      clinicId: [0,[Validators.required]],
      clinic:[null]
    })
  }

  getUserData(){
    let token = this._jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
    let id = token['UserId']
    if(token){
      this._nurseService.getById(id).subscribe((data)=>{
        console.log(data)
        this.editForm.setValue({
          id: data.id,
          age: data.age,
          name: data.name,
          clinicId: data.clinicId,
          clinic:{id:data.clinic.id,name:data.clinic.name}
        })
      })
    }
  }

  getClinics(){
    this._coreService.getClinic().subscribe((data)=>{
      this.clinics = data
    })
  }

  update(){
    let name = this.clinics?.find(x=>this.editForm.value.clinicId == x.id)?.name
    this.editForm.patchValue({
      clinic:{id:this.editForm.value.clinicId,name:name}
    })
    this._nurseService.editProfile(this.editForm.value).subscribe((data)=>{
      this._toastrServices.success('Updated')
      this.getUserData()
    })
  }
  ngOnInit(): void {
    this.createForm()
    this.getUserData()
    this.getClinics()
  }
}

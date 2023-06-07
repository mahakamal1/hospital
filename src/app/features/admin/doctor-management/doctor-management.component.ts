import { Component, OnInit, ViewChild } from '@angular/core';
import { faUserMinus, faUserPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { DoctorService } from './services/doctor.service';
import { Doctor } from './models/model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { clinic } from 'src/app/core/models/models';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-doctor-management',
  templateUrl: './doctor-management.component.html',
  styleUrls: ['./doctor-management.component.scss']
})
export class DoctorManagementComponent implements OnInit {
  addUser=faUserPlus
  editUser=faUserPen
  deleteUser =faUserMinus
  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;
  dataTable:Doctor[] = []
  addForm!:FormGroup
  clinics!:clinic[]

  constructor(
    private _doctorService:DoctorService,
    private _modalService: NgbModal,
    private _fb:FormBuilder,
    private _toastrService:ToastrService,
    private _coreService:CoreService
  ) {

  }

  openXl(content: any) {
    this.createAddForm()
		this._modalService.open(content, {  size: 'xl' ,backdropClass: 'light-blue-backdrop' });
	}

  getAll(){
    this._doctorService.getDoctors().subscribe((data)=>{
      this.dataTable = data
    })
  }

  getClinics(){
    this._coreService.getClinic().subscribe((data)=>{
      this.clinics = data
    })
  }

  createAddForm(){
    this.addForm = this._fb.group({
      userName:[,Validators.required],
      name:[,[Validators.required]],
      email:[,[Validators.required]],
      password:[,[Validators.required]],
      phone:[,[Validators.required]],
      role:['doctor',[Validators.required]],
      age:[,[Validators.required]],
      clinicId:[,[Validators.required]]
    })
  }

  add(){
    this._doctorService.AddDoctor(this.addForm.value).subscribe((data)=>{
      console.log(data)
      this.mySwal.fire()
      this.getAll()
    })
  }

  delete(doctor:Doctor){
    this._doctorService.delete(doctor).subscribe((data)=>{
      this._toastrService.error('Deleted')
      this.getAll()
    })
  }

  ngOnInit(): void {
    this.getAll()
    this.getClinics()
  }

}

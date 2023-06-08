import { clinic } from './../../../core/models/models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { faUserPlus, faUserPen, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { nurse } from './models/model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NurseService } from './services/nurse.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from '../doctor-management/services/doctor.service';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-nurse-managements',
  templateUrl: './nurse-managements.component.html',
  styleUrls: ['./nurse-managements.component.scss']
})
export class NurseManagementsComponent implements OnInit {
  addUser=faUserPlus
  editUser=faUserPen
  deleteUser =faUserMinus
  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;
  dataTable:nurse[] = []
  addForm!:FormGroup
  clinics!:clinic[]
  constructor(
    private _nurseService:NurseService,
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

  createAddForm(){
    this.addForm = this._fb.group({
      userName:[,Validators.required,Validators.minLength(4)],
      name:[,[Validators.required,Validators.minLength(4)]],
      email:[,[Validators.required,Validators.email]],
      password:[,[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      phone:[,[Validators.required]],
      role:['nurse',[Validators.required]],
      age:[,[Validators.required]],
      clinicId:[,[Validators.required]]
    })
  }


  getAll(){
    this._nurseService.getNurses().subscribe((data)=>{
      this.dataTable = data
    })
  }

  get f(){
    return this.addForm.controls;
  }

  add(){
    this._nurseService.AddNurse(this.addForm.value).subscribe((data)=>{
      console.log(data)
      this.mySwal.fire()
      this.getAll()
    })
  }

  delete(nurse:nurse){
    this._nurseService.deleteNurse(nurse).subscribe((data)=>{
      this._toastrService.error('Deleted')
      this.getAll()
    })
  }

  getClinics(){
    this._coreService.getClinic().subscribe((data)=>{
      this.clinics = data
    })
  }

  ngOnInit(): void {
    this.getAll()
    this.getClinics()
  }
}

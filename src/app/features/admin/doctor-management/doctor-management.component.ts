import { Component, OnInit, ViewChild } from '@angular/core';
import { faUserMinus, faUserPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { DoctorService } from './services/doctor.service';
import { Doctor } from './models/model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';

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
  roles=[
    {id:1,name:'doctor'},
    {id:2,name:'nurse'}
  ]
  clinics=[
    {id:1,name:'Test'},
    {id:2,name:'Test2'}
  ]

  constructor(
    private _doctorService:DoctorService,
    private _modalService: NgbModal,
    private _fb:FormBuilder,
    private _toastrService:ToastrService
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

  createAddForm(){
    this.addForm = this._fb.group({
      userName:[,Validators.required],
      name:[,[Validators.required]],
      email:[,[Validators.required]],
      password:[,[Validators.required]],
      phone:[,[Validators.required]],
      role:[,[Validators.required]],
      age:[,[Validators.required]],
      clinicId:[,[Validators.required]]
    })
  }

  add(){
    this._doctorService.Addworkers(this.addForm.value).subscribe((data)=>{
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
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { faUserPlus, faUserPen, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { nurse } from './models/model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NurseService } from './services/nurse.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from '../doctor-management/services/doctor.service';

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
  roles=[
    {id:1,name:'doctor'},
    {id:2,name:'nurse'}
  ]
  clinics=[
    {id:1,name:'Test'},
    {id:2,name:'Test2'}
  ]
  constructor(
    private _nurseService:NurseService,
    private _modalService: NgbModal,
    private _fb:FormBuilder,
    private _toastrService:ToastrService,
    private _doctorService:DoctorService
  ) {

  }

  openXl(content: any) {
    this.createAddForm()
		this._modalService.open(content, {  size: 'xl' ,backdropClass: 'light-blue-backdrop' });
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


  getAll(){
    this._nurseService.getNurses().subscribe((data)=>{
      this.dataTable = data
    })
  }

  add(){
    this._doctorService.Addworkers(this.addForm.value).subscribe((data)=>{
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

  ngOnInit(): void {
    this.getAll()
  }
}

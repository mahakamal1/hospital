import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { getClinicdoctor } from '../../models/models';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.scss']
})
export class ClinicDetailsComponent implements OnInit{
  id!:number
  doctorsData!:getClinicdoctor
  constructor(
    private _route:ActivatedRoute,
    private _homeService:HomeService
  ) {

  }

  getClinicDetails(id:number){
    this._homeService.getClinicdoctor(id).subscribe((data)=>{
      this.doctorsData = data
      console.log(data)
    })
  }
  ngOnInit(): void {
    this.id = Number(this._route.snapshot.paramMap.get('id'))
    this.getClinicDetails(this.id)
  }

}

import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { clinic } from 'src/app/core/models/models';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {
  clinicsArr!:clinic[]
  responsiveOptions!: any[];
  eye=faEye
  constructor(
    private _coreService:CoreService
  ) {

  }
  clinics(){
    this._coreService.getClinic().subscribe((data)=>{
      this.clinicsArr= data
    })
  }
  ngOnInit(): void {
    this.clinics()

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}

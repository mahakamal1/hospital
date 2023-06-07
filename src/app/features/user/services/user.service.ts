import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { changePassword } from 'src/app/core/models/models';
import { environment } from 'src/environments/environment.prod';
import { getPatientReservation } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http:HttpClient
  ) { }
  ChangePassword(obj:changePassword){
    return this._http.post(environment.baseUrl+'ChangePassword',obj)
  }

  GetPatientReservation(patientid:number):Observable<getPatientReservation[]>{
    return this._http.get<getPatientReservation[]>(environment.baseUrl+'api/Reservation/GetPatientReservation',{
      params:{
        patientid:patientid
      }
    })
  }
}

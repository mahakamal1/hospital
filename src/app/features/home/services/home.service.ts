import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getClinicdoctor } from '../models/models';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http:HttpClient) { }
  getClinicdoctor(clinicid:number):Observable<getClinicdoctor>{
    return this._http.get<getClinicdoctor>(environment.baseUrl+'api/Doctor/GetClinicdoctor',{
      params:{
        clinicid:clinicid
      }
    })
  }
}

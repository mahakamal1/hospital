import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addworkers, Doctor, getById } from '../models/model';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private _http:HttpClient
  ) { }

  Addworkers(obj:Addworkers){
    return this._http.post(environment.baseUrl+'Addworkers',obj,{responseType:'text'})
  }

  getDoctors():Observable<Doctor[]>{
    return this._http.get<Doctor[]>(environment.baseUrl+'api/Doctor')
  }

  editDoctor(obj:Doctor){
    return this._http.put(environment.baseUrl+'api/Doctor',obj)
  }

  delete(obj:Doctor){
    return this._http.delete(environment.baseUrl+'api/Doctor',{
      "body":obj
    })
  }

  byId():Observable<getById>{
    return this._http.get<getById>(environment.baseUrl+'api/Doctor/GetById')
  }
}

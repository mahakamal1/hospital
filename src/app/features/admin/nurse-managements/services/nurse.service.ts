import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { nurse } from '../models/model';
import { environment } from 'src/environments/environment.prod';
import { Addworkers } from '../../doctor-management/models/model';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(
    private _http:HttpClient
  ) { }

  AddNurse(obj:Addworkers){
    return this._http.post(environment.baseUrl+'AddNurse',obj,{responseType:'text'})
  }
  getNurses():Observable<nurse[]>{
    return this._http.get<nurse[]>(environment.baseUrl+'api/Nurse')
  }

  updateNurse(obj:nurse){
    return this._http.put(environment.baseUrl+'api/Nurse',obj)
  }

  deleteNurse(obj:nurse){
    return this._http.delete(environment.baseUrl+'api/Nurse',{
      "body":obj
    })
  }
}

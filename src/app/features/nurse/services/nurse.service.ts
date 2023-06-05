import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nurse } from '../models/models';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { changePassword } from 'src/app/core/models/models';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(
    private _http:HttpClient
  ) { }

  ChangePassword(obj:changePassword){
    return this._http.post(environment.baseUrl+'ChangePassword',obj)
  }

  getById(id:number):Observable<nurse>{
    return this._http.get<nurse>(environment.baseUrl+'api/Nurse/GetById',{
      params:{
        id:id
      }
    })
  }

  editProfile(obj:nurse){
    return this._http.put(environment.baseUrl+'api/Nurse',obj)
  }
}

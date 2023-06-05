import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { clinic, role } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _http:HttpClient) { }
  getClinic():Observable<clinic[]>{
    return this._http.get<clinic[]>(environment.baseUrl+'api/Clininc')
  }
  getRoles():Observable<role[]>{
    return this._http.get<role[]>(environment.baseUrl+'api/Role/GetAllRoles')
  }
}

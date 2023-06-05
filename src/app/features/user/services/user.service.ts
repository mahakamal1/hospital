import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { changePassword } from 'src/app/core/models/models';
import { environment } from 'src/environments/environment.prod';

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
}

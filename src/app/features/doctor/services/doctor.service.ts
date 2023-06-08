import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addPlan, getById, getCurrentPlanPatient, getDoctorPlans, patientPlan, updateObject } from '../models/models';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { changePassword } from 'src/app/core/models/models';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private _http:HttpClient
  ) { }

  ChangePassword(obj:changePassword){
    return this._http.post(environment.baseUrl+'ChangePassword',obj)
  }

  GetById(id:number):Observable<getById>{
    return this._http.get<getById>(environment.baseUrl+'api/Doctor/GetById',{
      params:{
        id:id
      }
    })
  }

  editProfile(obj:updateObject){
    return this._http.put(environment.baseUrl+'api/Doctor',obj)
  }

  addPlan(obj:addPlan){
    return this._http.post(environment.baseUrl+'api/Plan/AddPlan',obj)
  }

  getDoctorPlans(doctorid:number):Observable<getDoctorPlans[]>{
    return this._http.get<getDoctorPlans[]>(environment.baseUrl+'api/Plan/GetDoctorPlans',{
      params:{
        doctorid:doctorid
      }
    })
  }

  getPlanPatient(planid:number):Observable<patientPlan[]>{
    return this._http.get<patientPlan[]>(environment.baseUrl+'api/Plan/GetPlanPatient',{
      params:{
        planid:planid
      }
    })
  }

  getCurrentPlanPatient(doctorid:number):Observable<getCurrentPlanPatient[]>{
    return this._http.get<getCurrentPlanPatient[]>(environment.baseUrl+'api/Plan/GetCurrentPlanPatient',{
      params:{
        doctorid:doctorid
      }
    })
  }

  arrivalPatient(reservatioid:number){
    return this._http.put(environment.baseUrl+'api/Doctor/PatientPatient',{},{
      params:{
        reservatioid:reservatioid
      }
    })
  }
}

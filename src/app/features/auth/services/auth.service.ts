import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Login, RegisterPatient } from '../models/model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<string>
  public currentUser: Observable<string>
  @Output() fireIsLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private _http:HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentClientUser')!)
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value
  }
  login(obj:Login){
    return this._http.post(environment.baseUrl+'login',obj,{responseType: 'text'}).pipe(
      map((user:any) => {
        if (user) {
          localStorage.setItem('currentClientUser', JSON.stringify(user))
          this.currentUserSubject.next(user)
          this.fireIsLoggedIn.emit(true)
        }
        return user
      })
    )
  }

  getEmitter() {
    return this.fireIsLoggedIn;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentClientUser')
    this.currentUserSubject.next(null!)
    location.reload()
  }



  register(obj:RegisterPatient){
    return this._http.post(environment.baseUrl+'register',obj,{
      responseType:'text'
    })
  }
}

import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtDecodeService {

  constructor() { }

DecodeToken(token: string): any {
  return jwt_decode(token);
  }
}

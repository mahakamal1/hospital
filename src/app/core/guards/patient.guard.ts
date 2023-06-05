import { CanActivateFn } from '@angular/router';
import { JwtDecodeService } from '../services/jwt-decode.service';

export const patientGuard: CanActivateFn = (route, state) => {
  let jwtService = new JwtDecodeService()
  let token = jwtService.DecodeToken(String(localStorage.getItem('currentClientUser')))
  let role = token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  if(token && role === 'Patient'){
    return true
  }else{
    return false;
  }
};

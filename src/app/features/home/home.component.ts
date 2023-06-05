import { Component } from '@angular/core';
import { JwtDecodeService } from 'src/app/core/services/jwt-decode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /**
   *
   */
  constructor(
    private jwtService:JwtDecodeService
  ) {
    console.log(    this.jwtService.DecodeToken( String(localStorage.getItem('currentClientUser'))))
  }
}

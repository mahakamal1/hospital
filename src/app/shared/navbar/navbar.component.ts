import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isAdminUserLoghedIn:boolean = false

  ngOnInit(): void {
    if(localStorage.getItem('currentClientUser')){
      this.isAdminUserLoghedIn = true;
    }else{
      this.isAdminUserLoghedIn = false;
    }
  }

}

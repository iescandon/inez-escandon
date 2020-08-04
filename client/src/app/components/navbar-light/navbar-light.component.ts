import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-light',
  templateUrl: './navbar-light.component.html',
  styleUrls: ['./navbar-light.component.css'],
})
export class NavbarLightComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}

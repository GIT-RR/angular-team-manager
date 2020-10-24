import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
})
export class AuthLayoutComponent {
  authData = JSON.parse(localStorage.getItem('authData'));

  constructor(private router: Router) {}

  handleLogout = () => {
    setTimeout(() => {
      localStorage.clear();
      this.router.navigate(['/login']);
    }, 3000);
  };
}

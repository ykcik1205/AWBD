import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../myservices/auth-service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  username: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    const user = JSON.parse(localStorage.getItem("user") || '{}');
    this.username = user.username;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

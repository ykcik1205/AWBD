import { Component } from '@angular/core';
import { AuthService } from '../myservices/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['/menu']);
        },
        error: (err) => {
          this.errorMessage = err.error;
        }
      });
  }
}

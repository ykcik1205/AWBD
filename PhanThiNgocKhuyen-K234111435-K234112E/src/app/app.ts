import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PhanThiNgocKhuyen-K234111435-K234112E');
  isLoggedIn = false;
  username = "";
  role = "";
  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    this.username = localStorage.getItem("username") || "";
    this.role = localStorage.getItem("role") || "";
  }

  loginSuccess(){
    this.isLoggedIn = true;
    localStorage.setItem("isLoggedIn","true");
    this.username = localStorage.getItem("username") || "";
    this.role = localStorage.getItem("role") || "";
    this.router.navigate(['/shopping']);
  }

  logout(){
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

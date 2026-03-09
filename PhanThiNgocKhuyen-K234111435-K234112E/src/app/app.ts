import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PhanThiNgocKhuyen-K234111435-K234112E');
  isLoggedIn = false;

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  }

  loginSuccess() {
    this.isLoggedIn = true;
    localStorage.setItem("isLoggedIn", "true");
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem("isLoggedIn");
  }
}

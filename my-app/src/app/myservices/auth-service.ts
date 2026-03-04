import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = "http://localhost:3002";

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.apiUrl}/login`, { username, password })
        .subscribe({
          next: (res: any) => {
            localStorage.setItem("user", JSON.stringify(res.user));
            observer.next(res);
            observer.complete();
          },
          error: (err) => observer.error(err)
        });
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("user");
  }

  logout() {
    localStorage.removeItem("user");
  }
}

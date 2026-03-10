import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../myservices/auth-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username:string="";
  password:string="";
  message:string="";
  successMessage:string="";

  @Output() loginSuccess = new EventEmitter<boolean>();

  constructor(private auth:AuthService){}
  onLogin(){
    this.auth.login(this.username,this.password)
    .subscribe(res=>{
      if(res.success){
        this.successMessage = "Login successful!";
        this.message = "";
        // Lưu thông tin user
        localStorage.setItem("username", res.username);
        localStorage.setItem("role", res.role);
        localStorage.setItem("isLoggedIn","true");
        setTimeout(() => {
          this.loginSuccess.emit(true);
        }, 500);
      }
      else{
        this.message = "Invalid username or password";
        this.successMessage = "";
      }
    });
  }
}

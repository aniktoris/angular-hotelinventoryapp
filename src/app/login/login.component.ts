import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';

  ngOnInit(): void {
    //
  }

  login(){
    if(this.email === 'admin@gmail.com' && this.password === 'Admin'){
      alert("Login successful");
    }
  }
}

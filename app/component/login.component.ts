import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rms-app',
  templateUrl: `../view/login.component.html`,
  styleUrls: ["../view/css/login.component.css"]
})
export class LoginComponent  { 
  isDarkTheme: boolean = false;
  user: User = {username:"",password:""};

  constructor(private _router : Router){

  }

  getInToRMS(){
      if (this.user.username == "ashu" && this.user.password=="ashu"){
          this._router.navigate(['dashboard']);
      }
  }

  
}

interface User{
    username: String;
    password: String;
}
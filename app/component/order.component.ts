import { Component } from '@angular/core';

@Component({
  selector: 'order',
  template: `order`,
  styleUrls: ["../view/css/login.component.css"]
})
export class OrderComponent  { 
  isDarkTheme: boolean = false;
  username: String;

  constructor(){

  }

  getInToRMS(){
      alert(this.username);
  }

  
}
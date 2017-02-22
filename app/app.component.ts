import { Component } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'rms-app',
  templateUrl: `../view/app.component.html`,
  styleUrls: ['../view/css/app.component.css'],
  providers: []
})
export class AppComponent  { 
  appName = 'Retail Management System'; 

  constructor(){
    console.log("app component");
  }
  
}

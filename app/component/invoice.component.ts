import { Component } from '@angular/core';

@Component({
  selector: 'invoice',
  templateUrl: `../view/invoice.component.html`,
})
export class InvoiceComponent  { 
  title : String;
  total : Number;
  items : Item[];

  constructor(){
    this.title = "Invoice";
    console.log("InvoiceComponent Constructor");
  } 

}

interface Item{
  rate : Number;
  name : String;
  itemCode : String;
  unit : String;
  desc : String;
  quantity : Number;
}

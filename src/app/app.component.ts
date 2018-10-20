import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue: any;
  lineItems = [
    'Cars',
    'Internet',
    'Golf',
    'Money',  
    'Tesla',
    'Deep Web'
  ]


  // Adds a new line item to the list
  addLineItem(newLineItem: any) {
    if(!newLineItem) return alert('No empty line items allowed!!! \n Enter a cool one!');
    this.lineItems.unshift(newLineItem)
    this.inputValue = '';
  }
}

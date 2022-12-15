import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
    students: any[]= [
    {
      ID:101,Name:"Mohan Gabhale",Gender:"male",City:"mumbai",Fee:25000
    },
    {
      ID:102,Name:"Sandip Jadhav",Gender:"male",City:"pune",Fee:35000
    },
    {
      ID:103,Name:"Bhagyashree Marathe",Gender:"female",City:"buldhana",Fee:45000
    }];

    today:number=Date.now();
}

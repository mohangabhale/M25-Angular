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
      ID:101,Name:"Mohan Gabhale",City:"Mumbai"
    },
    {
      ID:102,Name:"Sandip Jadhav",City:"Pune"
    },
    {
      ID:103,Name:"Bhagyashree Marathe",City:"Buldhana"
    }];
}

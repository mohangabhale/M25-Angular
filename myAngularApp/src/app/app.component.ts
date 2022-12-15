import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*Nested Component*/
  template:`<div>
    <h1>{{title1}}</h1>
    <app-student></app-student>
  </div>`,
  /*External component*/
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skillsoft';
  title1 = 'Students Details';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  /*External Style*/
  //styleUrls: ['./student.component.css']
  /*Internal Style in the component file */
  styles:[`table{
    color: rgb(11, 12, 12);
    font-family: 'courier New', 'Courier New', Courier, monospace;
    font-size: large;
    border-collapse: collapse;
}
td{
    border: 1px solid black;
}`]
})
export class StudentComponent implements OnInit {

  Name:string="Mohan";
  Email:string="mohangabhale@gmail.com";
  Address:string="Mumbai";
  constructor() { }

  ngOnInit(): void {
    
  }

}

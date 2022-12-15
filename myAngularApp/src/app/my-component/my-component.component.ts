import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  //Internal template
  template:`<h1>{{name1}}</h1>
            <body>
              Hey Siri, how to know more about Angular and Typescript?
            </body>`,
  /*external template*/
  //templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit{

  name1="welcome to skillsoft platform";

  constructor() {}

  ngOnInit(): void{

  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//Inline template

template:`<div>
<!-- Two Way Binding --- combination of property[] and Event Binding()-->
FullName:<input [value]='FullName' (input)=  'print()'>
<br>
<!-- Two Way Binding --- combination of property[] and Event Binding()-->
<input [type]="FirstName" [(ngModel)]="twoWay">
{{twoWay}}

<br>
You have Entered: {{FullName}}

  <!--Internal template-->
  <!--Interpolation-->
  <!--Interpolation denoted by {{}}-->
  <h1>{{"First Name: "+FirstName+", "+"Last Name: "+LastName}}</h1>
  <h2>11+5*7-3={{11+5*7-3}}</h2>
  <!--Propery Binding[]-->
  <span [innerHTML]='title'></span>
  <br>
  <img alt="Item" [src]="itemImageurl"/>
  <div>
  <!-- Style Binding-->
  <button style ="background-color:red;color:blue">Submit</button>

  <button (click)="display()">Print</button>
  </div>
 
  <!--innerHTML is a target and title is a source Propery Binding[]-->
  </div>`,
  //External Template
 // templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Java Full Stack Program';
  FirstName:string="Mohan";
  LastName:string="Gabhale";
  twoWay:string="C2TC Program";
  FullName:string="Mohan D Gabhale";
  //copy image address of any image from web
  itemImageurl="https://res.cloudinary.com/practicaldev/image/fetch/s--wdb1LF1T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://1.bp.blogspot.com/-GDdk09Xubrw/X7HftcMR6sI/AAAAAAAAIVc/Bfqr8jTyYr4RoWOau2Mc0qklAN0mG13rQCLcBGAsYHQ/s1280/How%252Bto%252BBecome%252Ba%252BFull%252BStack%252BJava%252BDeveloper.png"
  //function
  display():void
  {
    console.log("Congratulations! Button working Successfully");
  }

  print():void
  {
    console.log("hurrah!!!!!!!!!!!");
  }
}

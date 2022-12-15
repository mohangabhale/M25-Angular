import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  template: `<div>
          <!--if value is true it will display the statement else not-->
                <h2 *ngIf="isValid ;else elseBlock"> welcom to java full stack</h2>
                <ng-template #elseBlock>
                <h2>M25</h2>
                </ng-template>
                </div>
                <br>
                <!--NgSwitch cse -->
                <div [ngSwitch]="color">
                <p *ngSwitchCase="'Hi'">Var is A</p>
                <p *ngSwitchCase="'Hello'">Var is B</p>
                <p *ngSwitchDefault="''">No value</p>

                </div>
                
                `, 
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  title = 'Directives';
  isValid: boolean=true;
  color='';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  isvalid:boolean= false;
  oncreateblock(){
    this.isvalid= true;
  }
}

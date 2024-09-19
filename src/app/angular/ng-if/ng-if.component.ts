import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  // ngif
  isvalid:boolean= false;
  // button click
  oncreateblock(){
    this.isvalid= true;
  }
}

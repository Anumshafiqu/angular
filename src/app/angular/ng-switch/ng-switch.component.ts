import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {
  selectedproduct:any;
  getproductval(val:any){
    console.log(val.target.value);
    this.selectedproduct= val.target.value

  }
}

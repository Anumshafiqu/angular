import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 @Input() productselected:boolean= false;
 @Input() selectedproduct !:string;
  Addedproduct:any;
  onAddProduct(){
    this.Addedproduct = this.selectedproduct
  }
}

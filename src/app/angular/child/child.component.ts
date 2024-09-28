import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // input decorator
 @Input() productselected:boolean= false;
 @Input() selectedproduct !:string;
//  output decorator
 @Output()  Addedproduct= new EventEmitter<any>();
  onAddProduct(){
    this.Addedproduct.emit(this.selectedproduct);
  }
}

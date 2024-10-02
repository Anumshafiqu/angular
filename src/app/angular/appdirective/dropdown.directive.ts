import { Directive } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.active') className:any;



  @HostListener('click') myclick(){
    this.className = ! this.className;



   }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../angular/appdirective/dropdown.directive';



@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    DropdownDirective
  ]
})
export class DesignUtilityModule { }

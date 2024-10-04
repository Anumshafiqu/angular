import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { LaptopPageComponent } from './laptop-page/laptop-page.component';
import { MobilePageComponent } from './mobile-page/mobile-page.component';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from '../appdirective/dropdown.directive';
import { DesignUtilityModule } from '../../appmodule/design-utility.module';
const dropdownpro = [
  {
    path: 'dropdown', component: DropdownComponent, children: [
      { path: 'laptop-page', component: LaptopPageComponent },
      { path: 'mobile-page', component: MobilePageComponent },
    ]
  }, 
]
@NgModule({
  declarations: [
    DropdownComponent,
    LaptopPageComponent,
    MobilePageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dropdownpro)
  ]
})
export class DropdownModule { }

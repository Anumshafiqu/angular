import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { LaptopPageComponent } from './laptop-page/laptop-page.component';
import { MobilePageComponent } from './mobile-page/mobile-page.component';
import { RouterModule } from '@angular/router';
import { DesignUtilityModule } from '../../appmodule/design-utility.module';

const dropdownpro = [
  {
    path: '', component: DropdownComponent, children: [
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
    //  DesignUtilityModule

    
  ],
  imports: [
    CommonModule,
     RouterModule.forChild(dropdownpro)
  ]
})
export class DropdownModule {
  constructor(){
    console.log("dropdown Module loadded")
  }
 }

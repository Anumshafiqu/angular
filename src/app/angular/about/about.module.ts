import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';


const aboutRoutes = [
  { path: 'about', component: AboutComponent },
]
@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(aboutRoutes)
  ],
  exports : [
   RouterModule
  ]
})
export class AboutModule { 
  constructor(){
    console.log("about module loaded")
  }
}

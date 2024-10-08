import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

const homeRoutes = [
  { path: 'home', component: HomeComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(homeRoutes)
  ]
  ,
  exports: [
    RouterModule,

  ]
})
export class HomeModule {
  constructor(){
    console.log("home module loaded")
  }
 }

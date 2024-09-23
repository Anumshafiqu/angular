import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './angular/ng-if/ng-if.component';
import { NgSwitchComponent } from './angular/ng-switch/ng-switch.component';
import { NgForComponent } from './angular/ng-for/ng-for.component';
import { StringInterpolationComponent } from './angular/string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './angular/event-binding/event-binding.component';
import { TemplateRefrenceComponent } from './angular/template-refrence/template-refrence.component';
import { HomeComponent } from './angular/home/home.component';
import { AboutComponent } from './angular/about/about.component';
import { ContactComponent } from './angular/contact/contact.component';
import { ProdcutComponent } from './angular/prodcut/prodcut.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './angular/login/login.component';
import { PageNotFoundComponent } from './angular/page-not-found/page-not-found.component';
import { LaptopComponent } from './angular/laptop/laptop.component';
import { TelevisionComponent } from './angular/television/television.component';
import { MobileComponent } from './angular/mobile/mobile.component';
import { WatchComponent } from './angular/watch/watch.component';
import { PipeComponent } from './angular/pipe/pipe.component';
import { UxpipePipe } from './apppipe/uxpipe.pipe';
import { FilterPipe } from './apppipe/filter.pipe';


const appRoutes:Routes=[
  {path: '' , redirectTo:'login', pathMatch:'full'},
{path: 'home' , component:HomeComponent},
{path: 'login' , component: LoginComponent},
{path: 'about' , component:AboutComponent},
{path: 'contact' , component:ContactComponent},
{path: 'prodcut'  ,component:ProdcutComponent, children: [
  {path: 'laptop' , component:LaptopComponent},
  {path: 'television' , component:TelevisionComponent},
  {path: 'mobile' , component:MobileComponent},
  {path: 'watch' , component:WatchComponent},
]},
{path: '**' , component:PageNotFoundComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    TemplateRefrenceComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProdcutComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    TelevisionComponent,
    MobileComponent,
    WatchComponent,
    PipeComponent,
    UxpipePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

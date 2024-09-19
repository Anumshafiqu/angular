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

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    TemplateRefrenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

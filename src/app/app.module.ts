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
import {  Routes } from '@angular/router';
import { LoginComponent } from './angular/login/login.component';
import { PageNotFoundComponent } from './angular/page-not-found/page-not-found.component';
import { LaptopComponent } from './angular/laptop/laptop.component';
import { TelevisionComponent } from './angular/television/television.component';
import { MobileComponent } from './angular/mobile/mobile.component';
import { WatchComponent } from './angular/watch/watch.component';
import { PipeComponent } from './angular/pipe/pipe.component';
import { UxpipePipe } from './apppipe/uxpipe.pipe';
import { FilterPipe } from './apppipe/filter.pipe';
import { ContactUsComponent } from './angular/contact-us/contact-us.component';
import { GetComponent } from './angular/get/get.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ApiComponent } from './service/api/api.component';
import { PostApiComponent } from './angular/post-api/post-api.component';
import { CardComponent } from './angular/card/card.component';
import { BuyProductComponent } from './angular/buy-product/buy-product.component';
import { ChildComponent } from './angular/child/child.component';




const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'post-api', component: PostApiComponent},
  { path: 'buy-product', component: BuyProductComponent},
  {
    path: 'prodcut', component: ProdcutComponent, children: [
      { path: 'laptop', component: LaptopComponent },
      { path: 'television', component: TelevisionComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'watch', component: WatchComponent },
    ]
  },
  { path: 'get', component: GetComponent },
  { path: '**', component: PageNotFoundComponent },

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
    FilterPipe,
    ContactUsComponent,
    GetComponent,
    ApiComponent,
    PostApiComponent,
    CardComponent,
    BuyProductComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

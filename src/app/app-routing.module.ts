import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfComponent } from './angular/ng-if/ng-if.component';
import { AboutComponent } from './angular/about/about.component';
import { BuyProductComponent } from './angular/buy-product/buy-product.component';
import { Card1Component } from './angular/card-1/card-1.component';
import { ContactUsComponent } from './angular/contact-us/contact-us.component';
import { ContactComponent } from './angular/contact/contact.component';
import { GetComponent } from './angular/get/get.component';
import { HomeComponent } from './angular/home/home.component';
import { LaptopComponent } from './angular/laptop/laptop.component';
import { LoginComponent } from './angular/login/login.component';
import { MobileComponent } from './angular/mobile/mobile.component';
import { PageNotFoundComponent } from './angular/page-not-found/page-not-found.component';
import { PostApiComponent } from './angular/post-api/post-api.component';
import { ProdcutComponent } from './angular/prodcut/prodcut.component';
import { TelevisionComponent } from './angular/television/television.component';
import { WatchComponent } from './angular/watch/watch.component';
import { ServicesModule } from './angular/service/services.module';
import { DropdownModule } from './angular/dropdown/dropdown.module';
import { DesignUtilityModule } from './appmodule/design-utility.module';
import { DropdownDirective } from './angular/appdirective/dropdown.directive';
// import { DropdownComponent } from './angular/dropdown/dropdown.component';
// import { LaptopPageComponent } from './angular/dropdown/laptop-page/laptop-page.component';
// import { MobilePageComponent } from './angular/dropdown/mobile-page/mobile-page.component';
// import { ServiceComponent } from './angular/service/service.component';
// import { HoemPageComponent } from './angular/service/hoem-page/hoem-page.component';
// import { AboutPageComponent } from './angular/service/about-page/about-page.component';
// import { Contact2Component } from './angular/service/contact-2/contact-2.component';
// import { BlogComponent } from './angular/service/blog/blog.component';


const routes: Routes = [


  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'post-api', component: PostApiComponent},
  { path: 'buy-product', component: BuyProductComponent},
  { path: 'card-1', component: Card1Component},
  {
    path: 'prodcut', component: ProdcutComponent, children: [
      { path: 'laptop', component: LaptopComponent },
      { path: 'television', component: TelevisionComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'watch', component: WatchComponent },
    ]
  },
  //    {
  //   path: 'dropdown', component: DropdownComponent, children: [
  //     { path: 'laptop-page', component: LaptopPageComponent },
  //     { path: 'mobile-page', component: MobilePageComponent },
  //   ]
  // }, 
  { path: 'get', component: GetComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,
    ServicesModule,
    DropdownModule,

  ]
})
export class AppRoutingModule { }

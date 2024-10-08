import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './angular/about/about.component';
import { BuyProductComponent } from './angular/buy-product/buy-product.component';
import { Card1Component } from './angular/card-1/card-1.component';
import { ContactUsComponent } from './angular/contact-us/contact-us.component';
import { ContactComponent } from './angular/contact/contact.component';
import { GetComponent } from './angular/get/get.component';
import { LaptopComponent } from './angular/laptop/laptop.component';
import { LoginComponent } from './angular/login/login.component';
import { MobileComponent } from './angular/mobile/mobile.component';
import { PageNotFoundComponent } from './angular/page-not-found/page-not-found.component';
import { PostApiComponent } from './angular/post-api/post-api.component';
import { ProdcutComponent } from './angular/prodcut/prodcut.component';
import { TelevisionComponent } from './angular/television/television.component';
import { WatchComponent } from './angular/watch/watch.component';
import { HomeModule } from './angular/home/home.module';
import { HomeComponent } from './angular/home/home.component';
import { AboutModule } from './angular/about/about.module';
import { CustomPreloadingService } from './service/custom-preloading.service';



const routes: Routes = [


  { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
   { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'post-api', component: PostApiComponent},
  { path: 'buy-product', component: BuyProductComponent},
  // {path : 'dropdown' , loadChildren : "./dropdown/dropdown.module#DropdownModule"},
  { 
    path: 'dropdown',  data: {Preload : true},
    loadChildren: () => import('./angular/dropdown/dropdown.module').then(m => m.DropdownModule)
  },
  // custom preloading
  { 
    path: 'service', data: {Preload : true},
    loadChildren: () => import('./angular/service/services.module').then(m => m.ServicesModule)
  },
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
  imports: [RouterModule.forRoot(routes, {preloadingStrategy : CustomPreloadingService}),

  ],
  exports: [RouterModule,

  ]
})
export class AppRoutingModule { }

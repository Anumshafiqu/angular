import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogComponent } from './blog/blog.component';
import { Contact2Component } from './contact-2/contact-2.component';
import { HoemPageComponent } from './hoem-page/hoem-page.component';
import { ServiceComponent } from './service.component';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from '../appdirective/dropdown.directive';
const proservices = [
  {
    path: 'service', component: ServiceComponent, children: [
      { path: 'hoem-page', component: HoemPageComponent },
      { path: 'about-page', component: AboutPageComponent },
      { path: 'contact-2', component: Contact2Component},
      { path: 'blog', component: BlogComponent},
    ]
  },
]
@NgModule({
  declarations: [
    ServiceComponent,
    HoemPageComponent,
    AboutPageComponent,
    Contact2Component,
    BlogComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proservices)
  ]
})
export class ServicesModule { }

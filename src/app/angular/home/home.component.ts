import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {name : 'Laptop'},
    {name : 'Mobile'},
    {name : 'TV'},
    {name : 'Watch'}
  ]
  statusOnline:boolean = true;
}

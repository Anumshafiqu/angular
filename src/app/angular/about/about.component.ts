import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
value:string = ' This is test value';
namesearch:string = ''
date = new Date();
nameArr = [
  'Alfreds Futterkiste',
  'Centro comercial Moctezuma',
  'Ernst Handel',
  'Island Trading'

]
productArr=[
{
  sno:1,
  name:'Mobile',
  price:'10000 Rs',
  available: ' available'
},

{
  sno:2,
  name:'Television',
  price:'10000 Rs',
  available: ' available'
},

{
  sno:3,
  name:'Laptop',
  price:'54000 Rs',
  available: ' available'
},
{
  sno:4,
  name:'Laptop (Hp)',
  price:'7000 Rs',
  available: 'not available'
},

]
onAddProduct(add:any){
  this.productArr.push({
    sno:5,
    name:add.value,
    price:'50000 Rs',
    available: ' available' 
  })

}
}

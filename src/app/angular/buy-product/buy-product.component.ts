import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrl: './buy-product.component.css'
})
export class BuyProductComponent {
  proselected:boolean= false;
  selproduct !:string;
   Addedproduct:any;
  onSelectedproduct(product:any){
    this.proselected = true;
     this.selproduct = product
  }
  // onAddProduct(){
  //   this.Addedproduct = this.selectedproduct
  // }
  onaddedproduct(proDate:any){
    this.Addedproduct = proDate
  }
}

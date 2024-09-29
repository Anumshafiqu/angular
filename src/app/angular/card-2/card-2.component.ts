import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../appservice/message.service';

@Component({
  selector: 'app-card-2',
  templateUrl: './card-2.component.html',
  styleUrl: './card-2.component.css'
})
export class Card2Component implements OnInit{
  Products :any = {};
  ngOnInit(): void {
    // this.Products = this._msgService.product
    this._msgService.product().subscribe(productData => this.Products = productData)
  }

  constructor(private _msgService:MessageService){}
  btnclick(){
    this._msgService.messageAlert()
  }
}

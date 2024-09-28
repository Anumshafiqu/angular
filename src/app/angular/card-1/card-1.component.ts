import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../appservice/message.service';

@Component({
  selector: 'app-card-1',
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.css'
})
export class Card1Component {
  // product='test';
  // ngOnInit(): void {
  //   this.product = this._msgService.product
  // }
  
  constructor(private _msgService:MessageService){}
  btnclick(){
    this._msgService.messageAlert()
  }
}

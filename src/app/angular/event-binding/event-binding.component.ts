import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  msg:string= '';
  onaddtocart(event:any){
    this.msg = event.target.value  + ' add in cart'
  }
  oninputtext(event:any){
    console.log(event.target.value)
  }
}

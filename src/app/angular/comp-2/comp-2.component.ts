import { Component } from '@angular/core';
import { MessageService } from '../../appservice/message.service';

@Component({
  selector: 'app-comp-2',
  templateUrl: './comp-2.component.html',
  styleUrl: './comp-2.component.css'
})
export class Comp2Component {
  constructor(private _msgService:MessageService){
    this._msgService.username.subscribe(uname =>{this.username = uname})

  }
username:string = 'Uxtrendz';
updateUserName(uname:any){
  this._msgService.username.next(uname.value)
}
}

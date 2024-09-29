import { Component } from '@angular/core';
import { MessageService } from '../../appservice/message.service';

@Component({
  selector: 'app-comp-3',
  templateUrl: './comp-3.component.html',
  styleUrl: './comp-3.component.css'
})
export class Comp3Component {
  constructor(private _msgService:MessageService){
    this._msgService.username.subscribe(uname =>{this.username = uname})

  }
  username:string = 'Uxtrendz';
  updateUserName(uname:any){
    this._msgService.username.next(uname.value)
  }

}

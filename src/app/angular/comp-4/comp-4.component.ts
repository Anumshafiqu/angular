import { Component } from '@angular/core';
import { MessageService } from '../../appservice/message.service';

@Component({
  selector: 'app-comp-4',
  templateUrl: './comp-4.component.html',
  styleUrl: './comp-4.component.css'
})
export class Comp4Component {
  constructor(private _msgService:MessageService){
    this._msgService.username.subscribe(uname =>{this.username = uname})

  }
  username:string = 'Uxtrendz';
  updateUserName(uname:any){
    this._msgService.username.next(uname.value)
  }

}

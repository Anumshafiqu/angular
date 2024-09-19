import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css'
})
export class StringInterpolationComponent {
  dynamic:string= 'anum'
  dyname:string  = 'uxtrendz' ;
  myMethod(){
    return 'My Channel Name is '  +  this.dyname
  }
  appstatus:boolean = true;
  status1:string = 'online';
  status2:string  = 'offline';
  enable:boolean= false
  
}

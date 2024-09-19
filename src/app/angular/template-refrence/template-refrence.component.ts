import { Component } from '@angular/core';

@Component({
  selector: 'app-template-refrence',
  templateUrl: './template-refrence.component.html',
  styleUrl: './template-refrence.component.css'
})
export class TemplateRefrenceComponent {

  // templare refrence
  ongetinfo(inputinfo:any){
    console.log(inputinfo.value)
  }


  // two way data binding

  uname:string= 'uxtrendz';


  // ngclass
  mltclass={
    class1:true,
    class2:false,
    class3:true
  }

  // ngstyle
  mltistyle={
    'background':'red',
    'border':'2px solid pink'
  }
}

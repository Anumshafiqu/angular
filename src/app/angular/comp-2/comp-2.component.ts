import { AfterViewInit, Component, ContentChild, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MessageService } from '../../appservice/message.service';
import { TestdirectiveDirective } from '../appdirective/testdirective.directive';

@Component({
  selector: 'app-comp-2',
  templateUrl: './comp-2.component.html',
  styleUrl: './comp-2.component.css'
})
export class Comp2Component implements AfterViewInit{
  constructor(private rendere:Renderer2){


  }
username:string = 'Default value';
  @ContentChild('childcontent') childparagraph!:ElementRef
clickMe(){
alert(this.username);
var text =  this.rendere.createText('this text is created by rendere')
this.rendere.appendChild(this.childparagraph.nativeElement,text)
}
ngAfterViewInit(): void {
  console.log(this.childparagraph);
  this.rendere.setStyle(this.childparagraph.nativeElement, 'color' , 'green')
}
   @ViewChild(TestdirectiveDirective) myDir!:TestdirectiveDirective
changeColor(color:string){
this.myDir.changeBg(color)

}

}

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private el:ElementRef, private rendere:Renderer2) {
    this.rendere.setStyle(this.el.nativeElement, 'background' , 'pink')
   }
   changeBg(color:string){
    this.rendere.setStyle(this.el.nativeElement,'background', color)
   }

  @HostListener('click') myclick(){
    this.rendere.setStyle(this.el.nativeElement, 'background' , 'yellow')
    this.rendere.setStyle(this.el.nativeElement, 'color' , 'white')
   }
   @HostListener('mouseover') mouseover(){
    this.rendere.setStyle(this.el.nativeElement, 'background' , 'lightgray')
    this.rendere.setStyle(this.el.nativeElement, 'color' , 'white')
   }
   @HostListener('mouseout') mouseout(){
    this.rendere.setStyle(this.el.nativeElement, 'background' , 'yellow')
    this.rendere.setStyle(this.el.nativeElement, 'color' , 'dark')
   }


}

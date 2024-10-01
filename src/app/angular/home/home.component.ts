import { Component, HostListener, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { Comp2Component } from '../comp-2/comp-2.component';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  // product='test';
  // ngOnInit(): void {
  //   this.product = this._msgService.product
  // }
  
  // constructor(private _msgService:MessageService){}
  // btnclick(){
  //   this._msgService.messageAlert()
  // }

  username= "uxtrendz"
  @ViewChild('box') box!:ElementRef;
  @ViewChild(Comp2Component) child!:Comp2Component
  ngOnInit(): void {
    // console.log(this.box)
    // $(window).scroll(function(){
      // console.log('scrolling')
    
  }
  constructor(private rendere:Renderer2){}
  ngAfterViewInit(): void {
    this.rendere.setStyle(this.box.nativeElement, 'background', 'green');
    this.rendere.setStyle(this.box.nativeElement, 'color', 'white');
    this.rendere.addClass(this.box.nativeElement, 'myclass');
    this.rendere.setAttribute(this.box.nativeElement, 'title', 'this is test title')
    // console.log(this.box); // Now it will give the correct ElementRef
    // this.box.nativeElement.style.background="blue"
    // this.box.nativeElement.style.color="white";
    // this.box.nativeElement.classList="bluebox";
    // this.box.nativeElement.innerHTML="tis is modified"

  }
  Changechildproperty(){
    this.child.username="uxtrendz"
  }
  CallChildMethod(){
    this.child.clickMe()

  }
  // HOST LISTENER
  // @HostListener('click') myClick(){
  //   alert("clicked")
  // }
  @HostListener('window:scroll' , ['$event']) myScroll(){
    console.log('scrolling')

  }

 
}

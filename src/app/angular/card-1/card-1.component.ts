import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Comp2Component } from '../comp-2/comp-2.component';

@Component({
  selector: 'app-card-1',
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.css'
})
export class Card1Component implements OnInit{
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
  @HostListener('click') myClick(){
    console.log("clicked")
  }
}

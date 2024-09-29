import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from '../../appservice/message.service';

@Component({
  selector: 'app-comp-1',
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.css'
})
export class Comp1Component implements OnInit , OnChanges, DoCheck , AfterContentInit
 , AfterContentChecked , AfterViewInit, AfterViewChecked , OnDestroy{
  // constructor(private _msgService:MessageService){
  //   this._msgService.username.subscribe(uname =>{this.username = uname})

  // }
  // username:string = 'Uxtrendz'
  // updateUserName(uname:any){
  //   this._msgService.username.next(uname.value)
  // }

 @Input() myValue:string= 'uxtrendz'
 counter:any;
 num:number= 1;
 constructor(){
  console.log("constructor called")
 }
 ngOnInit(): void {
   console.log("ngOnInit Called")
   this.counter = setInterval(() => {
    this.num = this.num + 1;
   }, 1000);
 }
 ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Called")
  // console.log(changes)
 }
 ngDoCheck(): void {
   console.log('ngDoCheck called')
 }
 ngAfterContentInit(): void {
   console.log('ngAfterContentInit')
 }
 ngAfterContentChecked(): void {
   console.log(' ngAfterContentChecked called')
 }
 ngAfterViewInit(): void {
   console.log("ngAfterViewInit called")
 }
 ngAfterViewChecked(): void {
   console.log("ngAfterViewChecked called")
 }
 ngOnDestroy(): void {
   console.log('ngOnDestroy called')
   clearInterval(this.counter)
 }

}

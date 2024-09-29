import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
  // service  just ik resueable class hote ha kis b specific km ka liya in ma hm data ko sotre kar rkhta ha or use
  // karta ha jha km zarort hoti ha
  messageAlert(){
    alert('Thanks for subscribe .')
  }

  // product = [ 
  //   {name : "Laptop", id : "001"},
  //   {name : 'Mobile',id:'002'},
  //   {name : 'TV',id:'003'},
  //   {name : 'Watch',id:'004'}
  // ]
  url = "https://jsonplaceholder.typicode.com/users";
  product():Observable<any>{
  return  this.http.get(this.url)
  }
  // in subject we can not set any initial value
  // username = new Subject<any>()
  //  BehaviorSubject ma hm ik initial value set kar skta ha 
  username = new BehaviorSubject('uxtrendz')

}

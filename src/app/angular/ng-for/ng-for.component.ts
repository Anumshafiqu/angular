import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
products=[
  {proimg:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', Name:'Laptop', Id:'01',price:50000},
  {proimg:'https://images.unsplash.com/photo-1717295248494-937c3a5655b1?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', Name:'TV', Id:'02',price:20000},
  {proimg:'https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlfGVufDB8fDB8fHww', Name:'Mobile', Id:'03',price:60000},
  {proimg:'https://media.istockphoto.com/id/2165287570/photo/media-concept-multiple-television-screens-digital-data-streaming-concept.jpg?s=1024x1024&w=is&k=20&c=hNoxBoEiXnX2_hfvBbNKDyWj7yOo2DIKgtaS_WNBmFs=', Name:'Television', Id:'04',price:10000},
]
}

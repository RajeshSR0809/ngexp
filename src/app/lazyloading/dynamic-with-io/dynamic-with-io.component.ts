import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-with-io',
  templateUrl: './dynamic-with-io.component.html',
  styleUrls: ['./dynamic-with-io.component.scss']
})
export class DynamicWithIOComponent implements OnInit {

  comps: { [key: string]: Promise<any> | null } = {
    product: import('./product-info/product-info.component').then(c => c.ProductInfoComponent) ,
    order: import('./order-info/order-info.component').then(c => c.OrderInfoComponent) 
  };

  config = [ { type: 'product', inputs: { info: { price :12 } } }, { type: 'order', inputs: { info: { items:12 } } } ];

  constructor() { }

  ngOnInit(): void {
  }

}

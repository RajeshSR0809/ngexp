import { Component, OnInit, Input, NgModule } from '@angular/core';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  
  @Input('info') info: any;
  dtls = {a:1,b:2,c:3};
  dtls$ = of(this.dtls);
  constructor() {}

  ngOnInit(): void {}
}


@NgModule({
  imports: [CommonModule],
  declarations: [ProductInfoComponent],
  exports: [ProductInfoComponent],
})
export class ProductInfoComponentModule {}
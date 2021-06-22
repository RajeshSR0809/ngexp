import { Component, OnInit, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  @Input('info') info: any;
  constructor() { }

  ngOnInit(): void {
  }

}


@NgModule({
  imports: [CommonModule],
  declarations: [OrderInfoComponent],
  exports: [OrderInfoComponent],
})
export class OrderInfoComponentModule {}
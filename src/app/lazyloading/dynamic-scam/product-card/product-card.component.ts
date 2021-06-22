import { Component, OnInit, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-product-card2',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent2 implements OnInit {

  @Input()
  set info(info: object){
    this._info = info;
  }
  get info(): object{
    return this._info;
  }
  private _info: object = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}



@NgModule({
  declarations: [
    ProductCardComponent2,
    
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ProductCardComponent2]
})
export class ProductCardComponent2Module { }

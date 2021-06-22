import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

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

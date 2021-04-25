import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p[extFtrs]',
  templateUrl: './ext-ftrs.component.html',
  styleUrls: ['./ext-ftrs.component.scss']
})
export class ExtFtrsComponent implements OnInit {

  valueFromDirective;
  constructor() { }

  ngOnInit(): void {
  }

  onextFtrs($event) {
    this.valueFromDirective = $event;
  }  
}

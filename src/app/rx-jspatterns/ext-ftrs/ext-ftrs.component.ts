import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'th[extFtrs]',
  templateUrl: './ext-ftrs.component.html',
  styleUrls: ['./ext-ftrs.component.scss']
})
export class ExtFtrsComponent implements OnInit {

  @HostBinding("style.width.px")
  width: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onextFtrs(width) {
    this.width = width;
  }  
  
}

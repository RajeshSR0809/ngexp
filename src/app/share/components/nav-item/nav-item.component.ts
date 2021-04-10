import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit, AfterViewInit {

  @Input() navItem;
  ngClass = {};
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.ngClass = { 'nav-item-child': this.navItem.nav, 'nav-item-parent': !(this.navItem.nav) }
  }

}

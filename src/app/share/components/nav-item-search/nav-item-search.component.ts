import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item-search',
  templateUrl: './nav-item-search.component.html',
  styleUrls: ['./nav-item-search.component.scss'],
  host: {
    class: 'nav-item-search-container'
  }
})
export class NavItemSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

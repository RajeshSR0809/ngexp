import { Component, OnInit, Input } from '@angular/core';
import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  providers: [SideNavService]
})
export class SideNavComponent implements OnInit {

  @Input() navItems;
  constructor() { }

  ngOnInit(): void {
  }

}

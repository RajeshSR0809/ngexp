import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/core/services/nav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened: boolean = true;
  panelOpenState = false;

  navItems$: Observable<any>;
  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navItems$ = this.navService.getNavItem();
  }

}

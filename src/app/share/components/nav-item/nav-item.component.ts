import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SideNavService } from 'src/app/dashboard/side-nav/side-nav.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap, map, switchMap, delay, take, takeUntil } from 'rxjs/operators';
import { Subject, of, race, Observable, BehaviorSubject, merge } from 'rxjs';
@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit, AfterViewInit {

  @Input() navItem;
  ngClass = {};
  constructor(private router: Router,private sideNavService: SideNavService) { 

  }

  ngOnInit(): void {
    this.sideNavService.r$.subscribe(data => console.log(data), null, () => console.log('completed'));
    of(this.router.routerState.snapshot.url)
      .pipe(
        filter((url: string) => url.includes(this.navItem.link)),
        delay(0),
        take(1),
        
        tap(data => this.sideNavService.direct$.next(data))
      )
      .subscribe()

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url),
        filter((url: string) => url.includes(this.navItem.link)),
        take(1),
        takeUntil(this.sideNavService.r$),
        tap(data => this.sideNavService.nav$.next(data))
      ).subscribe();

  }

  ngAfterViewInit(){
    this.ngClass = { 'nav-item-child': this.navItem.nav, 'nav-item-parent': !(this.navItem.nav) }
  }

}

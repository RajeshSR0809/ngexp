import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap, map, switchMap, delay, take, takeUntil } from 'rxjs/operators';
import { MatListItem } from '@angular/material/list';
import { Subject, of, race, Observable, BehaviorSubject, merge } from 'rxjs';
import { SideNavService } from 'src/app/dashboard/side-nav/side-nav.service';

@Component({
  selector: 'app-nav-item-expand',
  templateUrl: './nav-item-expand.component.html',
  styleUrls: ['./nav-item-expand.component.scss'],
  animations: [
    trigger('animationShowHide', [
      state('close', style({ height: '0px', overflow: 'hidden' })),
      state('open', style({ height: '*', overflow: 'hidden' })),
      transition('open <=> close', animate('200ms ease-in-out')),
    ]),
    trigger('animationRotate', [
      state('close', style({ transform: 'rotate(0)' })),
      state('open', style({ transform: 'rotate(-180deg)' })),
      transition('open <=> close', animate('200ms ease-in-out')),
    ]),
  ],
})
export class NavItemExpandComponent implements OnInit, AfterContentInit {
  panelOpen = false;
  sStatus = 'close';
  @Input() navItem;

  router$ = new Subject<string>();
  directRoute$: Observable<any> = new Subject();
  navRoute$: Observable<any>;
  @ViewChild('navItemRef') navItemRef: ElementRef<MatListItem>;

  constructor(private router: Router, private sideNavService: SideNavService) {
    // this.directRoute$ =
    //   of(this.router.routerState.snapshot.url).pipe(
    //     filter((url: string) => url.includes(this.navItem.link)),
    //     delay(0),
    //     tap(event => this.onSwitch()),
    //     take(1),
    //   )
    // this.navRoute$ =
    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     map((event: NavigationEnd) => event.url),
    //     filter((url: string) => url.includes(this.navItem.link)),
    //     tap(event => this.onSwitch()),
    //     take(1)
    //   )
  }

  ngAfterContentInit() {
    // merge(this.directRoute$, this.navRoute$)
    // .pipe(
    //   take(1)
    // )
    // .subscribe(_ => console.log('merged value ', _), null, ()=> console.log('completed'))
  }
  ngOnInit(): void {
    this.sideNavService.r$.subscribe(
    );
    of(this.router.routerState.snapshot.url)
      .pipe(
        filter((url: string) => url.includes(this.navItem.link)),
        delay(0),
        tap((event) => this.onSwitch()),
        take(1),
        tap((data) => this.sideNavService.direct$.next(data))
      )
      .subscribe();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url),
        filter((url: string) => url.includes(this.navItem.link)),
        tap((event) => this.onSwitch()),
        take(1),
        takeUntil(this.sideNavService.r$),
        tap((data) => this.sideNavService.nav$.next(data))
      )
      .subscribe();
  }

  onSwitch() {
    this.panelOpen = !this.panelOpen;
    this.sStatus = this.sStatus === 'close' ? 'open' : 'close';
  }


}

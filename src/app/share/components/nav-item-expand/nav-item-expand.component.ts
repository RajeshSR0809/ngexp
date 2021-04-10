import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap, map, switchMap, delay, take, merge } from 'rxjs/operators';
import { MatListItem } from '@angular/material/list';
import { Subject, of, race, Observable } from 'rxjs';

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
  directRoute$: Observable<any>;
  navRoute$: Observable<any>;
  @ViewChild('navItemRef') 
  set navItemRefSetter(matListItem: ElementRef<MatListItem>){
    
    //this.directRoute$ = 
    of(this.router.routerState.snapshot.url).pipe(
      take(1),
      filter((url: string) => url.includes(this.navItem.link)),
      delay(0),
      tap(event => this.onSwitch()),
    )
    .subscribe()

  }
  
  constructor(private router: Router) { }

  ngAfterContentInit(){
    console.log(this.directRoute$)
    console.log(this.navRoute$)
    this.router$.pipe(
      merge(this.directRoute$, this.navRoute$),
      take(1)
    )
    //.subscribe(console.log)
  }
  ngOnInit(): void {
    //this.navRoute$ = 
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url),
      filter((url: string) => url.includes(this.navItem.link)),
      tap(event => this.onSwitch()),
      take(1)
    )
    .subscribe()
  }

  onSwitch() {
    this.panelOpen = !this.panelOpen;
    this.sStatus = this.sStatus === 'close' ? 'open' : 'close';
  }


}

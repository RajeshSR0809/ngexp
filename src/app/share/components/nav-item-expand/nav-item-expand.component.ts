import { Component, OnInit, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap, map, switchMap, delay, take } from 'rxjs/operators';
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

  //navItemRef: ElementRef<MatListItem>
  @ViewChild('navItemRef') 
  set navItemRefSetter(matListItem: ElementRef<MatListItem>){
    //this.navItemRef = matListItem;
    of(this.router.routerState.snapshot.url).pipe(
      take(1),
      // switchMap(_ => of(this.router.routerState.snapshot.url)),
      filter((url: string) => url.includes(this.navItem.link)),
      delay(0),
      tap(event => this.onSwitch()),
    ).subscribe()

  }
  

  //directRoute$ = new Subject<ElementRef<MatListItem>>();
  constructor(private router: Router) { 
    
  }

  ngAfterContentInit(){

  }
  ngOnInit(): void {
    //race(this.directNav$, this.navigation$ ).subscribe(data => console.log(data));      
  }

  onSwitch() {
    this.panelOpen = !this.panelOpen;
    this.sStatus = this.sStatus === 'close' ? 'open' : 'close';
  }


}

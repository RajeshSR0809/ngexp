import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef, HostListener, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NavService } from 'src/app/core/services/nav.service';
import { Observable, of } from 'rxjs';
import { MatSidenav, MatSidenavContent, MatSidenavContainer } from '@angular/material/sidenav';
import { delay, take, filter } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';



export interface SIDE_NAV_STATE {
  screen: string;
  small :  string;
  large : string;
  current: string;
}

export const MobileSideNavState: SIDE_NAV_STATE = {
  screen: 'mobile',
  small: 'no',
  large: 'small',
  current: 'no'
}

export const LargeSideNavState: SIDE_NAV_STATE = {
  screen: 'large',
  small: 'small',
  large: 'large',
  current: 'large'
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  opened: boolean = true;
  hasBackdrop: boolean = false;
  panelOpenState = false;
  sideNavState: SIDE_NAV_STATE = { ...LargeSideNavState } ;
  navItems$: Observable<any>;

  @ViewChild('sidenav') sidenav: ViewContainerRef;
  @ViewChild('sideNavContent') sideNavContent: ViewContainerRef;
  @ViewChild('sidenavcontainer') sidenavcontainer: ViewContainerRef;

  @HostListener('window:resize', ['$event'])
  private onResize(event){
    const windowWidth = (event.currentTarget as Window).innerWidth;
    if (this.isInSmallScreen(windowWidth) && this.sideNavState.screen != 'mobile') {
      this.sideNavState = { ...MobileSideNavState };
      this.setSideNavClassOnCurrentState();
    }
      
    else if (!this.isInSmallScreen(windowWidth) &&  this.sideNavState.screen != 'large') {
      this.sideNavState = { ...LargeSideNavState, current: 'small' };
      this.setSideNavClassOnCurrentState();
    }

  }

  constructor(
    private navService: NavService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {
    if (this.router.url == '/') {
      this.router.navigate(['/directives'], { relativeTo: this.activateRoute });
    }
  }

  ngOnInit(): void {
    this.navItems$ = this.navService.getNavItem();
  }

  ngAfterViewInit(){
    of(1).pipe(take(1),delay(100)).subscribe(_ => {
      this.setSideNavClassOnCurrentState();
      this.calSideNavMargin();
    })
  }

  toggleSideNav() {
    const prevClass = this.getCurrentSideNavClass();
    const nextClass = this.getNextSideNavClass()
    this.setNextSideNavToShow(this.getNextSideNavToShow())
    this.toggleSideNavClass(prevClass, nextClass);
    this.calSideNavMargin();
  }

  getSideNavMargin(): string {
    const sideNavWidth: number = this.sidenav['_elementRef'].nativeElement
      .clientWidth;
    //this number is set in the code
    // ref _side-nav.scss

    // .mat - sidenav.small - sidenav {
    //   width: 100px;

    // so it is compared with that value

    if (sideNavWidth <= 0 ) {
      return 0 + 'px';
    }

    if (sideNavWidth >= 0 && sideNavWidth <= 120) {
      return 121 + 'px';
    }

    return sideNavWidth + 'px';
  }

  isInSmallScreen(width: number){
    return width <= 768;
  }


  getSmallSideNavClass() { 
    const small = this.sideNavState.small;
    const smallClass = small == 'no' ? 'no-sidenav' : small == 'small' ? 'small-sidenav' : '';
    return smallClass;

  }
  getLargeSideNavClass() { 
    const large = this.sideNavState.large;
    const largeClass = large == 'no' ? 'no-sidenav' : large == 'small' ? 'small-sidenav' : '';
    return largeClass;

  }

  getCurrentSideNavClass(): string{
    const current = this.sideNavState.current;
    const currentClass = current == 'no' ? 'no-sidenav' : current == 'small' ? 'small-sidenav' : '';
    return currentClass;

  }

  getNextSideNavToShow(): string{
    const next = this.sideNavState.current == this.sideNavState.small ? this.sideNavState.large : this.sideNavState.small;
    return next;
  }

  getNextSideNavClass(): string { 
    const next = this.getNextSideNavToShow();
    const nextClass = next == 'no' ? 'no-sidenav' : next == 'small' ? 'small-sidenav' : '';
    return nextClass
  }

  setNextSideNavToShow(next: string){
    this.sideNavState = { ...this.sideNavState, current: next }
  }

  toggleSideNavClass(prevClass: string, nextClass: string){


    if (nextClass)
      this.sidenav['_elementRef'].nativeElement.children[0].classList.add(
        nextClass
      );
    if (prevClass)
      this.sidenav['_elementRef'].nativeElement.children[0].classList.remove(
        prevClass
      );      

  }

  setSideNavClassOnCurrentState(){
    ['small-sidenav','no-sidenav'].map(css => {
      this.sidenav['_elementRef'].nativeElement.children[0].classList.remove(
        css
      );

    })
    const small = this.getSmallSideNavClass();
    const large = this.getLargeSideNavClass();
    const current = this.getCurrentSideNavClass();
    if (small)
      this.sidenav['_elementRef'].nativeElement.children[0].classList.remove(
        small
      );

    if (large)
      this.sidenav['_elementRef'].nativeElement.children[0].classList.remove(
        large
    );


    if (current)
      this.sidenav['_elementRef'].nativeElement.children[0].classList.add(
        current
      );

  }

  calSideNavMargin(){
    const n: HTMLElement = this.sideNavContent['elementRef'].nativeElement;
    of(1)
      .pipe(take(1), delay(100))
      .subscribe((_) => {
        n.style.marginLeft = this.getSideNavMargin();
    });      
  }
}

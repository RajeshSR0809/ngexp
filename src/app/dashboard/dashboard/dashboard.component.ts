import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NavService } from 'src/app/core/services/nav.service';
import { Observable, of } from 'rxjs';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { delay, take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  opened: boolean = true;
  panelOpenState = false;
  navItems$: Observable<any>;

  @ViewChild('sidenav') sidenav: ViewContainerRef;
  @ViewChild('sideNavContainer') sideNavContainer: ViewContainerRef;
  constructor(private navService: NavService, private router: Router, private activateRoute: ActivatedRoute) { 
    if (this.router.url == '/') {
      console.log(this.router.url)
      this.router.navigate(['/directives'], { relativeTo: this.activateRoute})
    }
  }

  ngOnInit(): void {
    this.navItems$ = this.navService.getNavItem();
  }

  toggleSideNav(){
    this.sidenav['_elementRef'].nativeElement.children[0].classList.toggle('small-sidenav');
    const n: HTMLElement = this.sideNavContainer['elementRef'].nativeElement;
    of(1).pipe(take(1),delay(100)).subscribe(_ => {
      n.style.marginLeft = this.getSideNavMargin();
    })
  }

  getSideNavMargin(): string{
    const sideNavWidth: number = this.sidenav['_elementRef'].nativeElement.clientWidth;
    //this number is set in the code
    // ref _side-nav.scss

    // .mat - sidenav.small - sidenav {
    //   width: 100px;
    
    // so it is compared with 100 
    if(sideNavWidth <= 100){
      return 101+'px';
    }
    return sideNavWidth+'px';
  }

}

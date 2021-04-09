import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
export class NavItemExpandComponent implements OnInit {

  panelOpen = false;
  sStatus = 'close';
  @Input() navItem;
  constructor() { }

  ngOnInit(): void {
  }

  onSwitch() {
    this.panelOpen = !this.panelOpen;
    this.sStatus = this.sStatus === 'close' ? 'open' : 'close';
  }
}

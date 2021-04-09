import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemExpandComponent } from './nav-item-expand.component';

describe('NavItemExpandComponent', () => {
  let component: NavItemExpandComponent;
  let fixture: ComponentFixture<NavItemExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavItemExpandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

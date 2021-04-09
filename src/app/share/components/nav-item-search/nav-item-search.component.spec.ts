import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemSearchComponent } from './nav-item-search.component';

describe('NavItemSearchComponent', () => {
  let component: NavItemSearchComponent;
  let fixture: ComponentFixture<NavItemSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavItemSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

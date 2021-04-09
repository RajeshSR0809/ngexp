import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyOptionsComponent } from './lazy-options.component';

describe('LazyOptionsComponent', () => {
  let component: LazyOptionsComponent;
  let fixture: ComponentFixture<LazyOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldToDeleteComponent } from './hold-to-delete.component';

describe('HoldToDeleteComponent', () => {
  let component: HoldToDeleteComponent;
  let fixture: ComponentFixture<HoldToDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldToDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldToDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

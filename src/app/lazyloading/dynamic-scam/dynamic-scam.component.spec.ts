import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSCAMComponent } from './dynamic-scam.component';

describe('DynamicSCAMComponent', () => {
  let component: DynamicSCAMComponent;
  let fixture: ComponentFixture<DynamicSCAMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSCAMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSCAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

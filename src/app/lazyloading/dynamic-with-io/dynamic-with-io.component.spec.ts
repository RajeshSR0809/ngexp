import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicWithIOComponent } from './dynamic-with-io.component';

describe('DynamicWithIOComponent', () => {
  let component: DynamicWithIOComponent;
  let fixture: ComponentFixture<DynamicWithIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicWithIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicWithIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

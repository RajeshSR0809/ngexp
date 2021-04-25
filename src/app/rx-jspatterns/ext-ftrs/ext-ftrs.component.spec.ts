import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtFtrsComponent } from './ext-ftrs.component';

describe('ExtFtrsComponent', () => {
  let component: ExtFtrsComponent;
  let fixture: ComponentFixture<ExtFtrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtFtrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtFtrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

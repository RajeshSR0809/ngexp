import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccmpComponent } from './dynamiccmp.component';

describe('DynamiccmpComponent', () => {
  let component: DynamiccmpComponent;
  let fixture: ComponentFixture<DynamiccmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiccmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

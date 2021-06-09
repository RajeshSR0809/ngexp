import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqrsComponent } from './cqrs.component';

describe('CqrsComponent', () => {
  let component: CqrsComponent;
  let fixture: ComponentFixture<CqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

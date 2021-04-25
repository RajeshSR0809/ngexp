import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirOutputsComponent } from './dir-outputs.component';

describe('DirOutputsComponent', () => {
  let component: DirOutputsComponent;
  let fixture: ComponentFixture<DirOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirOutputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

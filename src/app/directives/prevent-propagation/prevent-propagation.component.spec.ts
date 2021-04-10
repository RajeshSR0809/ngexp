import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventPropagationComponent } from './prevent-propagation.component';

describe('PreventPropagationComponent', () => {
  let component: PreventPropagationComponent;
  let fixture: ComponentFixture<PreventPropagationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventPropagationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventPropagationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

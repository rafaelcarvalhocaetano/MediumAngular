import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRangerComponent } from './slider-ranger.component';

describe('SliderRangerComponent', () => {
  let component: SliderRangerComponent;
  let fixture: ComponentFixture<SliderRangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderRangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

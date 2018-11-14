import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoEchartComponent } from './demo-echart.component';

describe('DemoEchartComponent', () => {
  let component: DemoEchartComponent;
  let fixture: ComponentFixture<DemoEchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoEchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

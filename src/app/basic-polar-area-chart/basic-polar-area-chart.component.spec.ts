import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPolarAreaChartComponent } from './basic-polar-area-chart.component';

describe('BasicPolarAreaChartComponent', () => {
  let component: BasicPolarAreaChartComponent;
  let fixture: ComponentFixture<BasicPolarAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPolarAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPolarAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

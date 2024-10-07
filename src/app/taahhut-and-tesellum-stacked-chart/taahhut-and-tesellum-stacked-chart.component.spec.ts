import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaahhutAndTesellumStackedChartComponent } from './taahhut-and-tesellum-stacked-chart.component';

describe('TaahhutAndTesellumStackedChartComponent', () => {
  let component: TaahhutAndTesellumStackedChartComponent;
  let fixture: ComponentFixture<TaahhutAndTesellumStackedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaahhutAndTesellumStackedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaahhutAndTesellumStackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartExampleComponent } from './line-chart-example.component';

describe('LineChartExampleComponent', () => {
  let component: LineChartExampleComponent;
  let fixture: ComponentFixture<LineChartExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

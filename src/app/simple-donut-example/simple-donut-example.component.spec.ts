import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDonutExampleComponent } from './simple-donut-example.component';

describe('SimpleDonutExampleComponent', () => {
  let component: SimpleDonutExampleComponent;
  let fixture: ComponentFixture<SimpleDonutExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDonutExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDonutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

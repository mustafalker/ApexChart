import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabrikaTaahhutlerComponent } from './fabrika-taahhutler.component';

describe('FabrikaTaahhutlerComponent', () => {
  let component: FabrikaTaahhutlerComponent;
  let fixture: ComponentFixture<FabrikaTaahhutlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabrikaTaahhutlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabrikaTaahhutlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

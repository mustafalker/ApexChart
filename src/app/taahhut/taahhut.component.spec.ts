import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaahhutComponent } from './taahhut.component';

describe('TaahhutComponent', () => {
  let component: TaahhutComponent;
  let fixture: ComponentFixture<TaahhutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaahhutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaahhutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

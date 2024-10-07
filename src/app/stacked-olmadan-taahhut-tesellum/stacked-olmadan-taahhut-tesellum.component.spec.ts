import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedOlmadanTaahhutTesellumComponent } from './stacked-olmadan-taahhut-tesellum.component';

describe('StackedOlmadanTaahhutTesellumComponent', () => {
  let component: StackedOlmadanTaahhutTesellumComponent;
  let fixture: ComponentFixture<StackedOlmadanTaahhutTesellumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedOlmadanTaahhutTesellumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedOlmadanTaahhutTesellumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

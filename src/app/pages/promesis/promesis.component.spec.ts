import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromesisComponent } from './promesis.component';

describe('PromesisComponent', () => {
  let component: PromesisComponent;
  let fixture: ComponentFixture<PromesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

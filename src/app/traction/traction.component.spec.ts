import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractionComponent } from './traction.component';

describe('TractionComponent', () => {
  let component: TractionComponent;
  let fixture: ComponentFixture<TractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

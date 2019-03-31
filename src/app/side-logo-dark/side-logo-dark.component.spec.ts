import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLogoDarkComponent } from './side-logo-dark.component';

describe('SideLogoDarkComponent', () => {
  let component: SideLogoDarkComponent;
  let fixture: ComponentFixture<SideLogoDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideLogoDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLogoDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

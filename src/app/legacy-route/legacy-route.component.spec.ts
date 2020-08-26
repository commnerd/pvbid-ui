import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyRouteComponent } from './legacy-route.component';

describe('LegacyRouteComponent', () => {
  let component: LegacyRouteComponent;
  let fixture: ComponentFixture<LegacyRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacyRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

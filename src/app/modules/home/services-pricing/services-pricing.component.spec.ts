import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPricingComponent } from './services-pricing.component';

describe('ServicesPricingComponent', () => {
  let component: ServicesPricingComponent;
  let fixture: ComponentFixture<ServicesPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

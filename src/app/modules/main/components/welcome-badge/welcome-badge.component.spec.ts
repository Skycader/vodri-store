import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBadgeComponent } from './welcome-badge.component';

describe('WelcomeBadgeComponent', () => {
  let component: WelcomeBadgeComponent;
  let fixture: ComponentFixture<WelcomeBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeBadgeComponent]
    });
    fixture = TestBed.createComponent(WelcomeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

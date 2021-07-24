import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { UtilityService } from './utility.service';

@Component({
  template: '<div id="ng-overlay" class="no-display"></div>'
})

class TestComponent {}

describe('UtilityService', () => {
  let service: UtilityService;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let overlayEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    service = TestBed.inject(UtilityService);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    overlayEl = fixture.debugElement.query(By.css('#ng-overlay'));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show and hide the loading overlay', () => {
    // initially hidden
    expect(overlayEl.nativeElement.classList.contains('no-display')).toBeTrue();

    // display overlay
    service.setPageLoading(true);
    fixture.detectChanges();
    expect(overlayEl.nativeElement.classList.contains('no-display')).toBeFalsy();

    // hide again
    service.setPageLoading(false);
    fixture.detectChanges();
    expect(overlayEl.nativeElement.classList.contains('no-display')).toBeTruthy();
  });
});

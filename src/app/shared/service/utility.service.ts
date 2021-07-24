import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  pageLoading = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
    ) {}

  setPageLoading(isLoading: boolean): void {
    this.pageLoading = isLoading;
    const el = this.document.getElementById('ng-overlay');
    if (el) {
        if (this.pageLoading) {
        el.classList.remove('no-display');
        } else {
            el.classList.add('no-display');
        }
    }
  }

  restResponseNavigate(navigateUrl: string): void {
    this.router.navigate([navigateUrl]);
  }

}

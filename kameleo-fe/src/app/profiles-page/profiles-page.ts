import { Component, inject } from '@angular/core';
import { BrnTabsImports } from '@spartan-ng/brain/tabs';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { Api } from '../api';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { errorToastAction } from '../app.config';

@Component({
  selector: 'app-profiles-page',
  imports: [BrnTabsImports, HlmTabsImports, HlmButtonImports],
  templateUrl: './profiles-page.html',
  styleUrl: './profiles-page.scss',
})
export class ProfilesPage {
  api = inject(Api);
  router = inject(Router);
  currentTab = 'general';

  setCurrentTab(tab: string) {
    if (tab === 'cookies') {
      this.api
        .getUpgrade()
        .pipe(
          errorToastAction((error) => error instanceof HttpErrorResponse && error.status === 402, {
            action: { label: 'Upgrade now', onClick: () => this.router.navigate(['/pricing']) },
          })
        )
        .subscribe({
          next: () => {
            this.currentTab = tab;
          },
        });
    } else {
      this.currentTab = tab;
    }
  }

  saveGeneral() {
    this.api.getSuccess().subscribe();
  }
  saveDevice() {
    this.api.getSuccess().subscribe({
      next: () => {
        try {
          throw new Error();
        } catch (error: any) {
          error.toastMessage = 'Custom error message';
          error.toastDescription = 'Custom description';
          throw error;
        }
      },
    });
  }
  saveBrowser() {
    this.api.getError().subscribe();
  }
}

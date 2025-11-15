import { Component, inject } from '@angular/core';
import { BrnTabsImports } from '@spartan-ng/brain/tabs';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { Api } from '../api';
import { toast } from 'ngx-sonner';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
      this.api.getUpgrade().subscribe({
        next: () => {
          this.currentTab = tab;
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse && error.status === 402) {
            toast('Insufficient plan', {
              description: 'Upgrade your subscription to edit cookies',
              action: {
                label: 'Upgrade now',
                onClick: () => this.router.navigate(['/pricing']),
              },
            });
          } else {
            throw error;
          }
        },
      });
    } else {
      this.currentTab = tab;
    }
  }

  saveGeneral() {
    this.api.getSuccess().subscribe();
  }
  saveBrowser() {
    this.api.getError().subscribe();
  }
}

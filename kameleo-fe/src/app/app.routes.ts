import { Routes } from '@angular/router';
import { GroupsPage } from './groups-page/groups-page';
import { ProfilesPage } from './profiles-page/profiles-page';
import { ApiAccessPage } from './api-access-page/api-access-page';
import { SettingsPage } from './settings-page/settings-page';
import { SupportPage } from './support-page/support-page';
import { PricingPage } from './pricing-page/pricing-page';

export const routes: Routes = [
  { path: 'profiles', component: ProfilesPage },
  { path: 'groups', component: GroupsPage },
  { path: 'api-access', component: ApiAccessPage },
  { path: 'support', component: SupportPage },
  { path: 'settings', component: SettingsPage },
  { path: 'pricing', component: PricingPage },

  // Optional: redirect root → profiles
  { path: '', pathMatch: 'full', redirectTo: 'profiles' },
];

import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  BrnNavigationMenuImports,
} from '@spartan-ng/brain/navigation-menu';
import {
  HlmNavigationMenuImports,
  HlmNavigationMenuLink,
} from '@spartan-ng/helm/navigation-menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-nav',
  imports: [
    BrnNavigationMenuImports,
    HlmNavigationMenuImports,
    HlmNavigationMenuLink,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full',
  },
  template: `
    <nav
      hlmNavigationMenu
      orientation="vertical"
      aria-label="Main Navigation"
      class="h-full w-full"
    >
      <ul
        hlmNavigationMenuList
        class="flex flex-col gap-2 p-4"
      >
        <!-- Profiles -->
        <li hlmNavigationMenuItem>
          <a
            hlmNavigationMenuLink
            routerLink="/profiles"
            class="block px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Profiles
          </a>
        </li>

        <!-- Groups -->
        <li hlmNavigationMenuItem>
          <a
            hlmNavigationMenuLink
            routerLink="/groups"
            class="block px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Groups
          </a>
        </li>

        <!-- API Access -->
        <li hlmNavigationMenuItem>
          <a
            hlmNavigationMenuLink
            routerLink="/api-access"
            class="block px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            API Access
          </a>
        </li>

        <!-- Support -->
        <li hlmNavigationMenuItem>
          <a
            hlmNavigationMenuLink
            routerLink="/support"
            class="block px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Support
          </a>
        </li>

        <!-- Settings -->
        <li hlmNavigationMenuItem>
          <a
            hlmNavigationMenuLink
            routerLink="/settings"
            class="block px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Settings
          </a>
        </li>
      </ul>
    </nav>
  `,
})
export class AppSidebarNavComponent {}

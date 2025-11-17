import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebarNavComponent } from './app-sidebar-nav.component';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppSidebarNavComponent, HlmToasterImports],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('kameleo-fe');
}

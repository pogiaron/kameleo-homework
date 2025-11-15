import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebarNavComponent } from './app-sidebar-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppSidebarNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kameleo-fe');
}

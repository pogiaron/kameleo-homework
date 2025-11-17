import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesPage } from './profiles-page';
import { Component, ErrorHandler, provideZonelessChangeDetection } from '@angular/core';
import { Api } from '../api';
import { of, tap } from 'rxjs';
import { GlobalErrorHandler } from '../app.config';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';

let mockApi: jasmine.SpyObj<Api>;

@Component({
  imports: [ProfilesPage, HlmToasterImports],
  template: `<app-profiles-page> </app-profiles-page> <hlm-toaster />`,
})
class ProfilesPageHost {}

describe('ProfilesPage', () => {
  // let component: ProfilesPage;
  // let fixture: ComponentFixture<ProfilesPage>;
  let component: ProfilesPageHost;
  let fixture: ComponentFixture<ProfilesPageHost>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj<Api>('Api', ['getSuccess', 'getError', 'getUpgrade']);

    await TestBed.configureTestingModule({
      imports: [ProfilesPage, ProfilesPageHost],
      providers: [
        provideZonelessChangeDetection(),
        { provide: ErrorHandler, useClass: GlobalErrorHandler }, 
        { provide: Api, useValue: spy }
      ],
    }).compileComponents();

    mockApi = TestBed.inject(Api) as jasmine.SpyObj<Api>;

    fixture = TestBed.createComponent(ProfilesPageHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(function() {
   jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should display error toast when gets error from the api', async () => {
    mockApi.getSuccess.and.returnValue(
      of('test' as any as void).pipe(tap(() => {throw new Error('test')}))
    );
    const element: HTMLElement = fixture.nativeElement;
    const btn = element.querySelector('#general-save')!;
    btn.dispatchEvent(new Event('click'));
    // jasmine.clock().tick(10);
    const toast = element.querySelector('ngx-sonner-toast');
  });
});


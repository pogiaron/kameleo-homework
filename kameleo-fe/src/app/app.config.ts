import {
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { toast } from 'ngx-sonner';
import { ApiError } from './api';

class MyErrorHandler extends ErrorHandler {
  override handleError(error: any) {
    super.handleError(error);
    let toastMessage;
    let toastDescription;
    if (error instanceof HttpErrorResponse) {
      const apiError = error.error as ApiError;
      toastMessage = apiError.message;
      toastDescription = 'Please try again later...';
      if (error.status === 0) {
        toastMessage = 'No internet connection';
        toastDescription = 'Please check you are connected to the internet';
      }
    }
    if (toastMessage)
      toast(toastMessage, {
        description: toastDescription,
      });
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: ErrorHandler, useClass: MyErrorHandler },
  ],
};

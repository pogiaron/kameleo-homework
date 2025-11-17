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
import { catchError, throwError } from 'rxjs';

interface Action {
  label: string;
  onClick: (event: MouseEvent) => void;
}

export function errorToastAction<T>(
  predicate: (error: any) => boolean,
  toastOverride: { message?: string; description?: string; action?: Action }
) {
  return catchError((error) => {
    if (predicate(error)) {
      error.error = error.error || {};
      error.error.action = toastOverride.action;
      error.toastMessage = toastOverride.message;
      error.toastDescription = toastOverride.description;
    }

    return throwError(() => error);
  });
}

class GlobalErrorHandler extends ErrorHandler {
  override handleError(error: any) {
    super.handleError(error);
    let toastMessage;
    let toastDescription;
    let toastAction;
    if (error instanceof HttpErrorResponse) {
      const apiError = error.error as ApiError & { action?: Action };
      toastMessage = apiError.message;
      toastDescription = apiError.description;
      toastAction = apiError.action;
      if (error.status === 0) {
        toastMessage = 'No internet connection';
        toastDescription = 'Please check you are connected to the internet';
      }
    } else {
      toastMessage = 'Unexpected problem';
      toastDescription = 'Please create a support ticket';
    }
    if (toastMessage)
      toast(error.toastMessage ?? toastMessage, {
        description: error.toastDescription ?? toastDescription,
        action: toastAction,
      });
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
};

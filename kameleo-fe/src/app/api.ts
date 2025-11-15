import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface ApiError {
  code: string;
  message: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly http = inject(HttpClient);
    private readonly baseUrl = '/api/demo';

  getSuccess() {
    return this.http.get<void>(`${this.baseUrl}/success`);
  }

  getError() {
    return this.http.get<void>(`${this.baseUrl}/error`);
  }

  getUpgrade() {
    return this.http.get<void>(`${this.baseUrl}/upgrade`);
  }

}

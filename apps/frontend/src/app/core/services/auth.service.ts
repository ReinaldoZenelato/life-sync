import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { tap } from 'rxjs/operators';
import { apiConfig } from '../config/api.config';
import { AuthPayload, LoginPayload, RegisterPayload } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly tokenState = signal<string | null>(localStorage.getItem(apiConfig.storageTokenKey));
  private readonly profileState = signal<Pick<AuthPayload, 'name' | 'email'> | null>(null);

  readonly token = this.tokenState.asReadonly();
  readonly profile = this.profileState.asReadonly();
  readonly isAuthenticated = computed(() => Boolean(this.tokenState()));

  login(payload: LoginPayload) {
    return this.http.post<AuthPayload>(`${apiConfig.baseUrl}/auth/login`, payload).pipe(
      tap((response) => this.persistSession(response)),
    );
  }

  register(payload: RegisterPayload) {
    return this.http.post<AuthPayload>(`${apiConfig.baseUrl}/auth/register`, payload).pipe(
      tap((response) => this.persistSession(response)),
    );
  }

  logout(): void {
    localStorage.removeItem(apiConfig.storageTokenKey);
    this.tokenState.set(null);
    this.profileState.set(null);
  }

  private persistSession(payload: AuthPayload): void {
    localStorage.setItem(apiConfig.storageTokenKey, payload.accessToken);
    this.tokenState.set(payload.accessToken);
    this.profileState.set({
      name: payload.name,
      email: payload.email,
    });
  }
}

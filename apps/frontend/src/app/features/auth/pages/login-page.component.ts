import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormFieldErrorComponent } from '../../../shared/ui/form-field-error/form-field-error.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FormFieldErrorComponent],
  template: `
    <section class="grid min-h-screen lg:grid-cols-[1.15fr_0.85fr]">
      <div class="relative hidden overflow-hidden bg-ink px-10 py-12 text-white lg:block">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(199,240,218,0.25),_transparent_40%),linear-gradient(135deg,_rgba(47,125,88,0.95),_rgba(17,33,31,0.98))]"></div>
        <div class="relative flex h-full flex-col justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.35em] text-mint/80">RZ Portfolio App</p>
            <h1 class="mt-6 max-w-md text-5xl font-semibold leading-tight">
              Sua rotina de saúde em um fluxo claro, rápido e instalável.
            </h1>
          </div>
          <div class="grid max-w-xl gap-4 text-sm text-mint/85">
            <p>Metas automáticas, hidratação, refeições e evolução em um único PWA.</p>
            <p>Baseado em Angular Signals no front e NestJS modular no back.</p>
          </div>
        </div>
      </div>

      <div class="bg-sand px-6 py-10 md:px-10 lg:px-14">
        <div class="mx-auto flex min-h-full max-w-xl flex-col justify-center">
          <div class="mb-10">
            <p class="text-sm font-medium uppercase tracking-[0.3em] text-leaf">LifeSync</p>
            <h2 class="mt-3 text-4xl font-semibold text-ink">Entrar na sua base pessoal</h2>
            <p class="mt-3 max-w-md text-base text-ink/65">
              A fundação já está pronta para autenticação JWT, validação estrita e evolução para dashboard.
            </p>
          </div>

          <form class="space-y-5 rounded-[2rem] bg-white p-8 shadow-glow" [formGroup]="form" (ngSubmit)="submit()">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-ink">E-mail</span>
              <input
                class="w-full rounded-2xl border bg-sand px-4 py-3 outline-none transition"
                type="email"
                formControlName="email"
                placeholder="rz&#64;lifesync.dev"
              />
              <app-form-field-error [control]="form.controls.email" label="E-mail" />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-ink">Senha</span>
              <input
                class="w-full rounded-2xl border bg-sand px-4 py-3 outline-none transition"
                type="password"
                formControlName="password"
                placeholder="Sua senha segura"
              />
              <app-form-field-error [control]="form.controls.password" label="Senha" />
            </label>

            @if (errorMessage()) {
              <p class="rounded-2xl bg-coral/10 px-4 py-3 text-sm text-coral">{{ errorMessage() }}</p>
            }

            <button class="w-full rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-leaf disabled:cursor-not-allowed disabled:opacity-60"
              type="submit" [disabled]="form.invalid || loading()">
              {{ loading() ? 'Entrando...' : 'Entrar' }}
            </button>

            <p class="text-sm text-ink/70">
              Ainda não tem acesso?
              <a routerLink="/auth/register" class="font-semibold text-leaf">Criar conta</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class LoginPageComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly errorMessage = signal('');

  readonly form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    this.authService.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading.set(false);
        void this.router.navigateByUrl('/');
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set('Nao foi possivel autenticar com as credenciais informadas.');
      },
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <section class="min-h-screen bg-[linear-gradient(180deg,_#f4efe6_0%,_#ffffff_48%,_#eef7f1_100%)] px-6 py-10 md:px-10">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="rounded-[2rem] bg-ink p-8 text-white shadow-glow">
            <p class="text-sm uppercase tracking-[0.35em] text-mint/70">Setup inicial</p>
            <h1 class="mt-4 text-4xl font-semibold leading-tight">Comece seu hub de nutricao e performance.</h1>
            <div class="mt-8 space-y-4 text-sm text-mint/80">
              <p>Cadastro, login, persistencia de token e arquitetura preparada para PWA.</p>
              <p>O dashboard entra na proxima etapa conectado ao perfil de saude e ao TDEE.</p>
            </div>
          </div>

          <form class="rounded-[2rem] bg-white p-8 shadow-glow md:p-10" [formGroup]="form" (ngSubmit)="submit()">
            <div>
              <p class="text-sm font-medium uppercase tracking-[0.3em] text-leaf">Criar conta</p>
              <h2 class="mt-3 text-4xl font-semibold text-ink">Ative o LifeSync</h2>
            </div>

            <div class="mt-8 grid gap-5">
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-ink">Nome</span>
                <input class="w-full rounded-2xl border border-ink/10 bg-sand px-4 py-3 outline-none transition focus:border-leaf"
                  type="text" formControlName="name" placeholder="Reinaldo Z" />
              </label>

              <label class="block">
                <span class="mb-2 block text-sm font-medium text-ink">E-mail</span>
                <input class="w-full rounded-2xl border border-ink/10 bg-sand px-4 py-3 outline-none transition focus:border-leaf"
                  type="email" formControlName="email" placeholder="rz@lifesync.dev" />
              </label>

              <label class="block">
                <span class="mb-2 block text-sm font-medium text-ink">Senha</span>
                <input class="w-full rounded-2xl border border-ink/10 bg-sand px-4 py-3 outline-none transition focus:border-leaf"
                  type="password" formControlName="password" placeholder="No minimo 8 caracteres" />
              </label>
            </div>

            @if (errorMessage()) {
              <p class="mt-5 rounded-2xl bg-coral/10 px-4 py-3 text-sm text-coral">{{ errorMessage() }}</p>
            }

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <button class="rounded-2xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-leaf disabled:cursor-not-allowed disabled:opacity-60"
                type="submit" [disabled]="form.invalid || loading()">
                {{ loading() ? 'Criando...' : 'Criar conta' }}
              </button>
              <a routerLink="/auth/login" class="rounded-2xl border border-ink/10 px-5 py-3 text-center text-sm font-semibold text-ink">
                Ja tenho conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class RegisterPageComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly errorMessage = signal('');

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
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

    this.authService.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading.set(false);
        void this.router.navigateByUrl('/');
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set('Nao foi possivel concluir o cadastro agora.');
      },
    });
  }
}

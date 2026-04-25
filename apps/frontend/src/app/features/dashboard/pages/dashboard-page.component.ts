import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(199,240,218,0.55),_transparent_26%),linear-gradient(180deg,_#f8f4ec_0%,_#eef7f1_100%)] px-6 py-8 md:px-10">
      <div class="mx-auto max-w-6xl">
        <header class="flex flex-col gap-4 rounded-[2rem] bg-white/80 p-6 shadow-glow backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.3em] text-leaf">Dashboard inicial</p>
            <h1 class="mt-2 text-3xl font-semibold text-ink">
              {{ authService.profile()?.name || 'LifeSync' }}
            </h1>
            <p class="mt-2 text-ink/65">A base do projeto ja esta pronta para receber perfil, metas e logs diarios.</p>
          </div>
          <div class="flex gap-3">
            <a routerLink="/auth/login" class="rounded-2xl border border-ink/10 px-4 py-3 text-sm font-semibold text-ink">Auth flow</a>
            <button class="rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white" type="button" (click)="authService.logout()">
              Sair
            </button>
          </div>
        </header>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <article class="rounded-[2rem] bg-white p-6 shadow-glow">
            <p class="text-sm uppercase tracking-[0.24em] text-leaf">Perfil</p>
            <h2 class="mt-3 text-xl font-semibold text-ink">Pronto para a etapa 2</h2>
            <p class="mt-3 text-sm text-ink/70">Peso, altura, idade, atividade e calculo de TDEE entram na proxima entrega.</p>
          </article>

          <article class="rounded-[2rem] bg-white p-6 shadow-glow">
            <p class="text-sm uppercase tracking-[0.24em] text-coral">Nutricao</p>
            <h2 class="mt-3 text-xl font-semibold text-ink">Blocos diarios preparados</h2>
            <p class="mt-3 text-sm text-ink/70">A navegação e o layout ja suportam as listas de refeicao e hidratação.</p>
          </article>

          <article class="rounded-[2rem] bg-white p-6 shadow-glow">
            <p class="text-sm uppercase tracking-[0.24em] text-ink/60">Portfolio</p>
            <h2 class="mt-3 text-xl font-semibold text-ink">Identidade RZ</h2>
            <p class="mt-3 text-sm text-ink/70">Visual autoral, mobile-first e pensado para virar peça forte de portfólio.</p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class DashboardPageComponent {
  protected readonly authService = inject(AuthService);
}

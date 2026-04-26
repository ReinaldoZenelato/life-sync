import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-field-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-2 min-h-5">
      @if (shouldShowError()) {
        <p class="text-sm font-medium text-coral">
          {{ errorMessage() }}
        </p>
      }
    </div>
  `,
})
export class FormFieldErrorComponent {
  readonly control = input<AbstractControl | null>(null);
  readonly label = input<string>('');

  shouldShowError(): boolean {
    const currentControl = this.control();

    return Boolean(currentControl && currentControl.invalid && (currentControl.touched || currentControl.dirty));
  }

  errorMessage(): string {
    const currentControl = this.control();

    if (!currentControl?.errors) {
      return '';
    }

    return this.resolveMessage(currentControl.errors);
  }

  private resolveMessage(errors: ValidationErrors): string {
    const label = this.label() || 'Este campo';

    if (errors['required']) {
      return `${label} é obrigatório.`;
    }

    if (errors['email']) {
      return 'Informe um e-mail válido.';
    }

    if (errors['minlength']) {
      return `${label} deve ter no mínimo ${errors['minlength'].requiredLength} caracteres.`;
    }

    if (errors['maxlength']) {
      return `${label} deve ter no máximo ${errors['maxlength'].requiredLength} caracteres.`;
    }

    if (errors['min']) {
      return `${label} deve ser maior ou igual a ${errors['min'].min}.`;
    }

    if (errors['max']) {
      return `${label} deve ser menor ou igual a ${errors['max'].max}.`;
    }

    if (errors['pattern']) {
      return `${label} está em um formato inválido.`;
    }

    return `${label} está inválido.`;
  }
}

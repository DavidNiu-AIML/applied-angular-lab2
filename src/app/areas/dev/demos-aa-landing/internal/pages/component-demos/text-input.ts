import { Component, input, model } from '@angular/core';

// Demo 4: Component with model signal (two-way binding)
@Component({
  selector: 'app-text-input',
  standalone: true,
  template: `
    <div role="alert" class="alert shadow-lg">
      <div class="flex-1">
        <label class="label">
          <span class="label-text font-semibold">{{ label() }}</span>
          <span class="label-text-alt badge badge-sm badge-neutral"
            >{{ value().length }} chars</span
          >
        </label>
        <input
          type="text"
          [value]="value()"
          (input)="onInput($event)"
          [placeholder]="placeholder()"
          class="input input-bordered w-full"
        />
      </div>
    </div>
  `,
})
export class TextInputComponent {
  label = input<string>('Text Input');
  placeholder = input<string>('Enter text...');

  // Model signal for two-way binding
  value = model<string>('');

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}

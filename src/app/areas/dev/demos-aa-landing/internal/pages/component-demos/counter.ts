import { Component, input, output, signal } from '@angular/core';

// Demo 2: Component with signal outputs
@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div role="alert" class="alert shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 shrink-0 stroke-info"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
      <div class="flex-1">
        <div class="text-xs opacity-70">Current Count</div>
        <div class="text-2xl font-bold">{{ count() }}</div>
      </div>
      <div class="flex gap-2">
        <button (click)="decrement()" class="btn btn-sm btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        </button>
        <button (click)="increment()" class="btn btn-sm btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <button (click)="reset()" class="btn btn-sm btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </div>
  `,
})
export class CounterComponent {
  initialValue = input<number>(0);

  // Signal outputs
  countChanged = output<number>();
  resetClicked = output<void>();

  count = signal(0);

  constructor() {
    // Initialize count from input
    this.count.set(this.initialValue());
  }

  increment() {
    this.count.update((c) => c + 1);
    this.countChanged.emit(this.count());
  }

  decrement() {
    this.count.update((c) => c - 1);
    this.countChanged.emit(this.count());
  }

  reset() {
    this.count.set(this.initialValue());
    this.resetClicked.emit();
  }
}

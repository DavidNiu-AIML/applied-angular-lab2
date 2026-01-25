import { Component, input } from '@angular/core';

// Demo 1: Simple component with signal inputs
@Component({
  selector: 'app-greeting',
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
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>
        <h3 class="font-bold">{{ greeting() }}</h3>
        <div class="text-xs">{{ name() || 'Guest' }}</div>
      </div>
    </div>
  `,
})
export class GreetingComponent {
  name = input<string>(''); // Optional input with default
  greeting = input.required<string>(); // Required input
}

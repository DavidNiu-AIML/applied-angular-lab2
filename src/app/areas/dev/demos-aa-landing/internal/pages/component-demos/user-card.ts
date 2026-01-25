import { Component, input, output, computed } from '@angular/core';

// Demo 3: Component with computed signals
@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div role="alert" class="alert shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 shrink-0 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <div class="flex-1">
        <h4 class="font-bold">{{ fullName() }}</h4>
        <p class="text-xs">{{ email() }}</p>
      </div>
      @if (isActive()) {
        <div class="badge badge-success gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Active
        </div>
      } @else {
        <div class="badge badge-error gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Inactive
        </div>
      }
    </div>
  `,
})
export class UserCardComponent {
  firstName = input.required<string>();
  lastName = input.required<string>();
  email = input.required<string>();
  isActive = input<boolean>(true);

  // Computed signal derived from inputs
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  // Output when card is clicked
  userSelected = output<{ name: string; email: string }>();

  selectUser() {
    this.userSelected.emit({
      name: this.fullName(),
      email: this.email(),
    });
  }
}

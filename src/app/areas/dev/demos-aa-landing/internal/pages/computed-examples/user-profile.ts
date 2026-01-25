import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: `
    <div class="grid gap-4 md:grid-cols-2">
      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h3 class="card-title">Edit Profile</h3>
          <div class="space-y-3">
            <div class="form-control">
              <label class="label">
                <span class="label-text">First Name</span>
              </label>
              <input
                type="text"
                [value]="firstName()"
                (input)="firstName.set($any($event.target).value)"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Last Name</span>
              </label>
              <input
                type="text"
                [value]="lastName()"
                (input)="lastName.set($any($event.target).value)"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Birth Year</span>
              </label>
              <input
                type="number"
                [value]="birthYear()"
                (input)="birthYear.set(+$any($event.target).value)"
                class="input input-bordered"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <h3 class="card-title">Computed Values</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="font-medium">Full Name:</span>
              <span class="badge badge-primary">{{ fullName() }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-medium">Initials:</span>
              <span class="badge badge-secondary">{{ initials() }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-medium">Age:</span>
              <span class="badge badge-accent">{{ age() }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-medium">Display Name:</span>
              <span class="badge badge-neutral">{{ displayName() }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class UserProfileComponent {
  firstName = signal('John');
  lastName = signal('Doe');
  birthYear = signal(1990);

  // Computed signals for profile
  fullName = computed(() => {
    const first = this.firstName().trim();
    const last = this.lastName().trim();
    return first && last ? `${first} ${last}` : first || last || 'Anonymous';
  });

  initials = computed(() => {
    const first = this.firstName().trim();
    const last = this.lastName().trim();
    return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase() || '??';
  });

  age = computed(() => {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear();
  });

  displayName = computed(() => {
    return `${this.fullName()} (${this.age()} years old)`;
  });
}

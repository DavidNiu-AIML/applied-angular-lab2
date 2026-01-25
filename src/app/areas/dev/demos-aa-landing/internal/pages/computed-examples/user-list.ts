import { Component, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="space-y-4">
      <div class="flex flex-wrap gap-4">
        <div class="form-control flex-1 min-w-50">
          <label class="label">
            <span class="label-text">Search</span>
          </label>
          <input
            type="text"
            [value]="searchTerm()"
            (input)="searchTerm.set($any($event.target).value)"
            placeholder="Search by name or email..."
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Status Filter</span>
          </label>
          <select
            [value]="statusFilter()"
            (change)="statusFilter.set($any($event.target).value)"
            class="select select-bordered"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Sort By</span>
          </label>
          <select
            [value]="sortBy()"
            (change)="sortBy.set($any($event.target).value)"
            class="select select-bordered"
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="date">Join Date</option>
          </select>
        </div>
      </div>

      <div class="card bg-base-200 shadow">
        <div class="card-body">
          <div class="flex items-center justify-between mb-3">
            <h3 class="card-title">Results</h3>
            <div class="badge badge-neutral">
              {{ filteredAndSortedUsers().length }} of {{ users().length }}
            </div>
          </div>
          <div class="space-y-2">
            @for (user of filteredAndSortedUsers(); track user.id) {
              <div class="card bg-base-100 shadow-sm">
                <div class="card-body p-3">
                  <div class="flex items-center justify-between">
                    <div class="flex-1">
                      <p class="font-medium">{{ user.name }}</p>
                      <p class="text-sm text-base-content/70">{{ user.email }}</p>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="badge badge-ghost badge-sm">{{
                        user.joinDate | date: 'shortDate'
                      }}</span>
                      @if (user.active) {
                        <div class="badge badge-success gap-1">
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
                        <div class="badge badge-ghost">Inactive</div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            } @empty {
              <div class="alert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>No users found</span>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class UserListComponent {
  searchTerm = signal('');
  statusFilter = signal('all');
  sortBy = signal('name');

  users = signal([
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      active: true,
      joinDate: new Date('2023-01-15'),
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      active: false,
      joinDate: new Date('2023-03-22'),
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      active: true,
      joinDate: new Date('2023-02-10'),
    },
    {
      id: 4,
      name: 'Diana Prince',
      email: 'diana@example.com',
      active: true,
      joinDate: new Date('2023-05-30'),
    },
    {
      id: 5,
      name: 'Eve Anderson',
      email: 'eve@example.com',
      active: false,
      joinDate: new Date('2023-04-18'),
    },
  ]);

  // Computed signal that combines filtering and sorting
  filteredAndSortedUsers = computed(() => {
    let result = [...this.users()];

    // Filter by search term
    const search = this.searchTerm().toLowerCase();
    if (search) {
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search),
      );
    }

    // Filter by status
    const status = this.statusFilter();
    if (status !== 'all') {
      result = result.filter((user) => (status === 'active' ? user.active : !user.active));
    }

    // Sort
    const sortField = this.sortBy();
    result.sort((a, b) => {
      if (sortField === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortField === 'email') {
        return a.email.localeCompare(b.email);
      } else {
        return a.joinDate.getTime() - b.joinDate.getTime();
      }
    });

    return result;
  });
}

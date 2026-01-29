import { httpResource } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
export interface book {
  title: string;
  id: string;
  author: string;
  year: number;
  pages: number;
}
@Component({
  selector: 'ht-home-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th>total books</th>
            <th>earliest year</th>
            <th>latest year</th>
            <th>total pages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ totalBooks() }}</td>
            <td>{{ earliestYear() }}</td>
            <td>{{ latestYear() }}</td>
            <td>{{ totalPages() }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th>title</th>
            <th>id</th>
            <th>author</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          @for (book of booksResource.value(); track book.title) {
            <tr>
              <td>{{ book.title }}</td>
              <td>{{ book.id }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.year }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <!-- <app-ui-page title="list">
      <pre>{{ booksResource.value() | json }}</pre>
    </app-ui-page> -->
  `,
  styles: ``,
})
export class HomePage {
  booksResource = httpResource<book[]>(() => '/api/books');
  totalBooks = computed(() => this.booksResource.value()?.length ?? 0);
  earliestYear = computed(
    () => this.booksResource.value()?.reduce((b1, b2) => (b1.year < b2.year ? b1 : b2)).year,
  );
  latestYear = computed(
    () => this.booksResource.value()?.reduce((b1, b2) => (b1.year > b2.year ? b1 : b2)).year,
  );
  totalPages = computed(() =>
    (this.booksResource.value() ?? []).reduce((acc, book) => acc + book.pages, 0),
  );
}

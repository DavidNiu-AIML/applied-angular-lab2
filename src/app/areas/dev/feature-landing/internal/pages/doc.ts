import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownViewer } from '@ht/dev/ui-markdown/markdown-viewer';

import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-dev-pages-viewer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, JsonPipe, RouterOutlet, MarkdownViewer],
  template: `<app-ui-page title="Developer Guide: {{ titleText() }}">
    @if (tdr() && tdr() !== '') {
      <p class="mb-4 font-boldest text-xl">Technical Discussion Record</p>
    }
    <div class="prose prose-lg line-numbers max-w-none! p-4  mt-8 bg-base-100 ">
      <app-dev-ui-markdown-viewer
        [src]="mdFile()"
        (onError)="showError($event)"
        (onSuccess)="error.set(undefined)"
      ></app-dev-ui-markdown-viewer>
    </div>

    @if (error()) {
      <div class="alert alert-error mt-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error loading document:</span>
          <pre>{{ error() | json }}</pre>
        </div>
      </div>
    } @else {
      <router-outlet></router-outlet>
    }
  </app-ui-page>`,
  styles: ``,
})
export class DocPage {
  doc = input.required<string>();
  tdr = input<string>();
  error = signal<string | Error | undefined>(undefined);

  titleText = computed(() => {
    const title = this.doc();
    // Remove the dashes and capitalize the first letter of each word
    return title
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
  mdFile = computed(() => `docs/${this.tdr() ? this.tdr() + '/' : ''}${this.doc()}.md`);
  showError($event: string | Error) {
    this.error.set($event);
  }
}

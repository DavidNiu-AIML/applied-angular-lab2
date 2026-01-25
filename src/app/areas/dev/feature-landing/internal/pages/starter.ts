import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dev-pages-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideMarkdown({})],
  imports: [PageLayout],
  template: `<app-ui-page title="The Starter App"> </app-ui-page>`,
  styles: ``,
})
export class StarterPage {}

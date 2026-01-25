import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicCard } from '@ht/shared/ui-common/cards/basic-card';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'ht-home-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, BasicCard],
  template: `
    <app-ui-page title="Hypertheory Angular Starter 2026">
      <app-ui-card-basic title="Build Something">
        <p>This starter app is provided to be the foundation for your Angular projects.</p>
        <p>
          Feel free to explore the code, modify it, and use it as a starting point for your own
          applications.
        </p>
        <p>Happy coding!</p>
      </app-ui-card-basic>
    </app-ui-page>
  `,
  styles: ``,
})
export class HomePage {}

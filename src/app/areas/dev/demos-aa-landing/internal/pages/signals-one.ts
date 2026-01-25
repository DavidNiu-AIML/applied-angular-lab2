import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-demos-aa-pages-signals-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `<app-ui-page title="signals-one"> </app-ui-page>`,
  styles: ``,
})
export class SignalsOnePage {}

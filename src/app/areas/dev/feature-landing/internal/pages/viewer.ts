import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

import { IconName, NgIconComponent } from '@ng-icons/core';

type GuidLink = {
  title: string;
  path: string;
  icon?: IconName;
  children?: GuidLink[];
};

@Component({
  selector: 'app-dev-pages-viewer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, RouterOutlet, RouterLinkWithHref, RouterLinkActive, NgIconComponent],
  template: `<app-ui-page title="Developer Docs">
    <div class="flex flex-row columns-2 gap-4">
      <div class="w-1/4">
        <ul class="menu  w-fit">
          @for (link of links(); track link.path) {
            <li>
              <a
                class="link"
                [class.font-bold]="link.icon"
                [routerLink]="link.path"
                [routerLinkActive]="['bg-accent', 'text-accent-content']"
              >
                @if (link.icon) {
                  <ng-icon [name]="link.icon" class="inline w-2 h-2 mr-1"></ng-icon>
                }
                {{ link.title }}
              </a>
              @if (link.children) {
                <ul class="pl-4">
                  @for (child of link.children; track child.path) {
                    <li>
                      <a
                        class="link"
                        [routerLink]="child.path"
                        [routerLinkActive]="['bg-accent', 'text-accent-content']"
                      >
                        {{ child.title }}
                      </a>
                    </li>
                  }
                </ul>
              }
            </li>
          }
        </ul>
      </div>
      <div class="w-full">
        <router-outlet></router-outlet>
      </div>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class ViewerPage {
  protected links = signal<GuidLink[]>([
    {
      title: 'Overview',
      path: 'overview',
      icon: 'lucideBook',
    },
    {
      title: 'Packages',
      path: 'packages',
      icon: 'lucidePackage',
    },
    {
      title: 'Technical Discussion Records',
      path: 'tdr/tdr',
      icon: 'lucideLightbulb',
      children: [
        {
          title: 'Project Structure',
          path: 'tdr/project-structure',
        },
        {
          title: 'Boundaries',
          path: 'tdr/boundaries',
        },
        {
          title: 'Sheriff',
          path: 'tdr/sheriff',
        },
      ],
    },
    {
      title: 'Testing',
      path: 'testing',
      icon: 'lucideTestTubeDiagonal',
      children: [
        {
          title: 'Unit Testing',
          path: 'testing-unit',
        },
        {
          title: 'System Testing',
          path: 'testing-system',
        },
      ],
    },
    {
      title: 'Development Tools',
      path: 'tools',
      icon: 'lucideWrench',
    },
  ]);
}

import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from '@ht/dev/feature-landing/internal/pages/home';
import { ResourcesPage } from '@ht/dev/feature-landing/internal/pages/resources';
import { DocPage } from './internal/pages/doc';
import { provideMarkdown } from 'ngx-markdown';
import { ViewerPage } from './internal/pages/viewer';
export const devLandingFeatureRoutes: Routes = [
  {
    path: '',
    providers: [provideMarkdown()],
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'resources',
        component: ResourcesPage,
      },
      {
        path: 'viewer',
        component: ViewerPage,
        children: [
          {
            path: ':tdr/:doc',
            component: DocPage,
          },

          {
            path: ':doc',
            component: DocPage,
          },
          {
            path: '**',
            redirectTo: 'overview',
          },
        ],
      },
    ],
  },
];

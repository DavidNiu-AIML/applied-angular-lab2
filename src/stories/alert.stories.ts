/* eslint-disable @typescript-eslint/naming-convention */
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

import { AlertComponent } from '../app/areas/shared/ui-common/alerts/alert';
import {
  AlertIconInfoComponent,
  AlertIconSuccessComponent,
  AlertIconWarningComponent,
  AlertIconErrorComponent,
  AlertIconUserComponent,
  AlertIconCalculatorComponent,
} from '../app/areas/shared/ui-common/alerts/alert-icons';

const meta: Meta<AlertComponent> = {
  title: 'UI Common/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        AlertComponent,
        AlertIconInfoComponent,
        AlertIconSuccessComponent,
        AlertIconWarningComponent,
        AlertIconErrorComponent,
        AlertIconUserComponent,
        AlertIconCalculatorComponent,
      ],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'error'],
      description: 'The visual variant of the alert',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the icon slot',
    },
    shadow: {
      control: 'boolean',
      description: 'Whether to apply shadow',
    },
  },
  args: {
    variant: 'neutral',
    showIcon: true,
    shadow: true,
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const BasicAlert: Story = {
  args: {
    variant: 'neutral',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <span>This is a basic alert message</span>
      </app-ui-common-alert>
    `,
  }),
};

export const InfoAlert: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <app-alert-icon-info slot="icon" />
        <div>
          <h3 class="font-bold">New Software Update</h3>
          <div class="text-xs">You have a pending software update.</div>
        </div>
      </app-ui-common-alert>
    `,
  }),
};

export const SuccessAlert: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <app-alert-icon-success slot="icon" />
        <span>Your purchase has been confirmed!</span>
      </app-ui-common-alert>
    `,
  }),
};

export const WarningAlert: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <app-alert-icon-warning slot="icon" />
        <div>
          <h3 class="font-bold">Warning: Invalid email address!</h3>
          <div class="text-xs">Please check your email and try again.</div>
        </div>
      </app-ui-common-alert>
    `,
  }),
};

export const ErrorAlert: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <app-alert-icon-error slot="icon" />
        <div>
          <h3 class="font-bold">Error!</h3>
          <div class="text-xs">Something went wrong. Please try again.</div>
        </div>
      </app-ui-common-alert>
    `,
  }),
};

export const WithActions: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <app-alert-icon-warning slot="icon" />
        <div>
          <h3 class="font-bold">Confirm Action</h3>
          <p class="text-xs">This action cannot be undone</p>
        </div>
        <div slot="actions" class="flex gap-2">
          <button class="btn btn-sm btn-ghost">Cancel</button>
          <button class="btn btn-sm btn-primary">Confirm</button>
        </div>
      </app-ui-common-alert>
    `,
  }),
};

export const UserCard: Story = {
  args: {
    variant: 'neutral',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <app-alert-icon-user slot="icon" />
        <div class="flex-1">
          <h4 class="font-bold">John Doe</h4>
          <p class="text-xs">john.doe@example.com</p>
        </div>
        <div slot="actions">
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
        </div>
      </app-ui-common-alert>
    `,
  }),
};

export const CounterExample: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <app-alert-icon-calculator slot="icon" />
        <div class="flex-1">
          <div class="text-xs opacity-70">Current Count</div>
          <div class="text-2xl font-bold">42</div>
        </div>
        <div slot="actions" class="flex gap-2">
          <button class="btn btn-sm btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <button class="btn btn-sm btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </app-ui-common-alert>
    `,
  }),
};

export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    showIcon: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <div>
          <h3 class="font-bold">No Icon Alert</h3>
          <div class="text-xs">This alert doesn't have an icon</div>
        </div>
      </app-ui-common-alert>
    `,
  }),
};

export const WithoutShadow: Story = {
  args: {
    variant: 'neutral',
    shadow: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-ui-common-alert ${argsToTemplate(args)}>
        <app-alert-icon-info slot="icon" />
        <span>This alert has no shadow</span>
      </app-ui-common-alert>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-4">
        <app-ui-common-alert variant="neutral">
          <app-alert-icon-info slot="icon" />
          <span>Neutral alert</span>
        </app-ui-common-alert>

        <app-ui-common-alert variant="info">
          <app-alert-icon-info slot="icon" />
          <span>Info alert</span>
        </app-ui-common-alert>

        <app-ui-common-alert variant="success">
          <app-alert-icon-success slot="icon" />
          <span>Success alert</span>
        </app-ui-common-alert>

        <app-ui-common-alert variant="warning">
          <app-alert-icon-warning slot="icon" />
          <span>Warning alert</span>
        </app-ui-common-alert>

        <app-ui-common-alert variant="error">
          <app-alert-icon-error slot="icon" />
          <span>Error alert</span>
        </app-ui-common-alert>
      </div>
    `,
  }),
};

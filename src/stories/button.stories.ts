import type { Meta, StoryObj } from '@storybook/angular';
import { expect, fn } from 'storybook/test';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({ args, canvasElement, userEvent }) => {
    // You can use the `args` to access the arguments defined for the story.
    // Access the component's DOM element via the `canvasElement` parameter.
    const button = canvasElement.querySelector('button');
    // Simulate a click event on the button.
    expect(button).toHaveTextContent('Button');

    await userEvent.click(button!);
    // Now you can make assertions or further interactions as needed.
    expect(button).toHaveTextContent('Clicked!');
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    backgroundColor: '#fff700',
  },
};

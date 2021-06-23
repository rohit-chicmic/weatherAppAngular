import { Meta } from '@storybook/angular/types-6-0';
import { ButtonType } from 'src/app/core/models';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent
} as Meta;

export const Primary = () => ({
  template: `<wa-button>Primary</wa-button>`
});

export const Secondary = () => ({
  template: `<wa-button type=${ButtonType.Secondary}>Secondary</wa-button>`
});
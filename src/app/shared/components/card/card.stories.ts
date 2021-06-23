import { Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from './card.component';

export default {
  title: 'Components/Card',
  component: CardComponent
} as Meta;

export const Card = () => ({
  template: `<wa-card>Card Component</wa-card>`
});

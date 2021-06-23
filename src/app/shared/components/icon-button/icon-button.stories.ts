import { Meta } from '@storybook/angular/types-6-0';
import { IconButtonComponent } from './icon-button.component';

export default {
  title: 'Components/Icon Button',
  component: IconButtonComponent
} as Meta;

export const IconButton = () => ({
  template: `
    <wa-icon-button>
      <span class="material-icons">gps_fixed</span>
    </wa-icon-button>
  `
});

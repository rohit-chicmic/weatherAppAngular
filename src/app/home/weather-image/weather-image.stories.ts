import { Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { WeatherImageComponent } from './weather-image.component';
import { WeatherState } from '../../core/models';

export default {
  title: 'Components/Weather Image',
  component: WeatherImageComponent
} as Meta;

const Template: Story<WeatherImageComponent> = args => ({
  props: { ...args }
});

export const WeatherImage = Template.bind({});

WeatherImage.args = {
  weather: WeatherState.Rain
}

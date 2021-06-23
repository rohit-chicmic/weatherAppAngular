import { Story, componentWrapperDecorator } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { WeatherInfoComponent } from './weather-info.component';

export default {
  title: 'Components/Weather Info',
  component: WeatherInfoComponent,
  decorators: [
    componentWrapperDecorator(
      story => `<div style="background-color: #1E213A">${story}</div>`
    )
  ]
} as Meta;

const Template: Story<WeatherInfoComponent> = args => ({
  props: { ...args }
});

export const WeatherInfo = Template.bind({});

WeatherInfo.args = {
  city: {
    id: 1,
    name: 'Bogotá',
    temp: '14',
    weather: 'Cloud',
    humidity: 13,
    pressure: 10,
    visibility: 13,
    windSpeed: 3
  }
}

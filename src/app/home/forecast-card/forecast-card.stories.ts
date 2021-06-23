import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { ForecastCardComponent } from './forecast-card.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { WeatherImageComponent } from '../weather-image/weather-image.component';
import { WeatherState } from 'src/app/core/models';

export default {
  title: 'Components/Forecast Card',
  component: ForecastCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent, WeatherImageComponent]
    })
  ]
} as Meta;

const Template: Story<ForecastCardComponent> = args => ({
  props: { ...args }
});

export const ForecastCard = Template.bind({});

ForecastCard.args = {
  item: {
    date: new Date().toDateString(),
    temp: {
      max: 10,
      min: 9
    },
    weather: WeatherState.Thunderstorm
  }
}

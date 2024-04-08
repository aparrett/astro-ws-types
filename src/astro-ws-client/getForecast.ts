import { ForecastGridResponse, ForecastValue } from '../nws';
import { Units } from '../utils';

export interface GetForecastResponse {
  updateTime: string;
  elevation: ForecastGridResponse['properties']['elevation'];
  temperature: ForecastValue[];
  dewpoint: ForecastValue[];
  relativeHumidity: ForecastValue[];
  windChill: ForecastValue[];
  skyCover: ForecastValue[];
  windDirection: ForecastValue[];
  windSpeed: ForecastValue[];
  windGust: ForecastValue[];
  probabilityOfPrecipitation: ForecastValue[];
}

export interface GetForecastParams {
  lat: string;
  long: string;
  units?: Units;
}

/**
 * View full types at https://www.weather.gov/documentation/services-web-api
 * */

export interface PointResponse {
  properties: {
    forecastGridData: string;
  };
}

export interface ForecastValue {
  /** format: 2024-04-05T05:00:00+00:00/PT1H */
  validTime: string;
  value: number;
}

export interface ForecastData {
  uom: string;
  values: ForecastValue[];
}

export interface ForecastGridResponse {
  properties: {
    /** format 2024-04-05T14:11:21+00:00 */
    updateTime: string;
    /** uom: meters */
    elevation: {
      unitCode: string;
      value: number;
    };
    /** uom: Celcius */
    temperature: ForecastData;
    /** uom: Celcius */
    dewpoint: ForecastData;
    /** uom: percent */
    relativeHumidity: ForecastData;
    /** uom: Celcius */
    windChill: ForecastData;
    /** uom: percent */
    skyCover: ForecastData;
    /** uom: degree (angle) */
    windDirection: ForecastData;
    /** uom: km/hr */
    windSpeed: ForecastData;
    /** uom: km/hr */
    windGust: ForecastData;
    /** uom: percent */
    probabilityOfPrecipitation: ForecastData;
  };
}

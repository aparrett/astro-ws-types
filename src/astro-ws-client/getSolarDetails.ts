export interface GetSolarDetailsParams {
  lat: string;
  long: string;
  date: string;
}

export interface GetSolarDetailsResponse {
  sunrise: Date;
  sunset: Date;
  civilTwilightBegin: Date;
  civilTwilightEnd: Date;
  nauticalTwilightBegin: Date;
  nauticalTwilightEnd: Date;
  astronomicalTwilightBegin: Date;
  astronomicalTwilightEnd: Date;
}

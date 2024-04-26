import { Coordinates } from '../utils';

/** to see the full list of properties visit https://docs.mapbox.com/api/search/search-box/#search-request */
export interface MapboxFeature {
  properties: {
    name: string;
    place_formatted: string;
    coordinates: Coordinates;
  };
}

export interface MapboxForwardSearchResponse {
  features: MapboxFeature[];
}

import { Coordinates } from "../utils";

export interface GetLocationsParams {
  location: string;
}

export interface GetLocationsResponse {
  name: string;
  coordinates: Coordinates;
}[]
import { SpatialFeature } from './SpatialFeature';
import { PointGeometry } from './Geometry';

export interface AirportProperties {
  identifier: string;
  dataSourceType: 'ICAO' | 'FAA' | 'IATA' | 'OTHER';
  name: string;
  /** ISO 3166-1 alpha-2 country code. */
  countryCode: string;
}
export type AirportFeature = SpatialFeature<AirportProperties, PointGeometry>;

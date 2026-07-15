import { SpatialFeature } from './SpatialFeature';
import { PointGeometry } from './Geometry';

export interface AirportProperties {
  identifier: string;
  dataSourceType: 'ICAO' | 'FAA' | 'IATA' | 'OTHER';
  name: string;
  countryCode: string;
}
export type AirportFeature = SpatialFeature<AirportProperties, PointGeometry>;

import { SpatialFeature } from './SpatialFeature';
import { PointGeometry } from './Geometry';
import { ISO8601String } from './DateTime';

export interface WeatherProperties {
  identifier: string;
  dataSourceType: 'ICAO' | 'WMO' | 'OTHER';
  timestamp: ISO8601String;
  conditions: 'VFR' | 'IFR' | 'LIFR' | 'UNKNOWN';
  description: string;
  raw: string;
}
export type WeatherFeature = SpatialFeature<WeatherProperties, PointGeometry>;

import { SpatialFeature } from './SpatialFeature';
import { PointGeometry } from './Geometry';

export interface WeatherProperties {
  identifier: string;
  dataSourceType: 'ICAO' | 'WMO' | 'OTHER';
  timestamp: string;
  conditions: 'VFR' | 'IFR' | 'LIFR' | 'UNKNOWN';
  description: string;
  raw: string;
}
export type WeatherFeature = SpatialFeature<WeatherProperties, PointGeometry>;

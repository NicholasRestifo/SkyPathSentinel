import { SpatialFeature } from './SpatialFeature';
import { PolygonGeometry } from './Geometry';

export interface HazardProperties {
  type: 'WEATHER' | 'AIRSPACE' | 'NOTAM' | 'TERRAIN';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  description: string;
}
export type HazardFeature = SpatialFeature<HazardProperties, PolygonGeometry>;

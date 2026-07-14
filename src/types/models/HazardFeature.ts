import { SpatialFeature } from './SpatialFeature';
import { PolygonGeometry } from './Geometry';

/**
 * Represents any constraint on flight operations (NOTAMs, Airspace, Weather Hazards).
 */
export interface HazardProperties {
  /** The category of the hazard. */
  type: 'WEATHER' | 'AIRSPACE' | 'NOTAM' | 'TERRAIN';
  /** The severity level of the hazard. */
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  /** Human-readable summary (e.g., "Runway Closed", "TFR"). */
  description: string;
}
export type HazardFeature = SpatialFeature<HazardProperties, PolygonGeometry>;

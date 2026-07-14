import { SpatialFeature } from './SpatialFeature';
import { PointGeometry } from './Geometry';

/**
 * Represents meteorological conditions at a specific location.
 * Used for high-level safety assessment and pilot situational awareness.
 */
export interface WeatherProperties {
  /** The primary identifier for the station (e.g., ICAO code). */
  identifier: string;
  /** The system that defines the identifier (e.g., 'ICAO', 'WMO'). */
  dataSourceType: 'ICAO' | 'WMO' | 'OTHER';
  /** ISO 8601 timestamp of the report. */
  timestamp: string;
  /** Canonical classification of flight conditions. */
  conditions: 'VFR' | 'IFR' | 'LIFR' | 'UNKNOWN';
  /** Human-readable summary (e.g., "Heavy Rain", "Fog"). */
  description: string;
  /** Original raw report (for auditability). */
  raw: string;
}
export type WeatherFeature = SpatialFeature<WeatherProperties, PointGeometry>;

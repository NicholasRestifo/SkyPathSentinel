import { SpatialFeature } from './SpatialFeature';
import { PointGeometry } from './Geometry';

/**
 * Represents a physical aviation facility.
 */
export interface AirportProperties {
  /** The primary identifier for the airport (e.g., 'KJFK'). */
  identifier: string;
  /** The system that defines the identifier (e.g., 'ICAO', 'FAA'). */
  dataSourceType: 'ICAO' | 'FAA' | 'IATA' | 'OTHER';
  /** The full name of the airport. */
  name: string;
  /** ISO 3166-1 alpha-2 country code. */
  countryCode: string;
}
export type AirportFeature = SpatialFeature<AirportProperties, PointGeometry>;

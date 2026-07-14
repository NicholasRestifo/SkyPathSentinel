import { Point, Polygon, LineString, Geometry } from 'geojson';

export type PointGeometry = Point;
export type PolygonGeometry = Polygon;
export type LineStringGeometry = LineString;
export type GeoJSONGeometry = Geometry;

export interface Feature<TProperties> {
  id: string;
  dataSource: string;
  properties: TProperties;
}

export interface SpatialFeature<TProperties, TGeometry extends GeoJSONGeometry> extends Feature<TProperties> {
  geometry: TGeometry;
}

export interface AirportProperties {
  identifier: string;
  dataSourceType: 'ICAO' | 'FAA' | 'IATA' | 'OTHER';
  name: string;
  countryCode: string;
}
export type AirportFeature = SpatialFeature<AirportProperties, PointGeometry>;

export interface WeatherProperties {
  identifier: string;
  dataSourceType: 'ICAO' | 'WMO' | 'OTHER';
  timestamp: string;
  conditions: 'VFR' | 'IFR' | 'LIFR' | 'UNKNOWN';
  description: string;
  raw: string;
}
export type WeatherFeature = SpatialFeature<WeatherProperties, PointGeometry>;

export interface HazardProperties {
  type: 'WEATHER' | 'AIRSPACE' | 'NOTAM' | 'TERRAIN';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  description: string;
}
export type HazardFeature = SpatialFeature<HazardProperties, PolygonGeometry>;

// Keep these for now to avoid breaking everything, but they should be updated
export interface AirportQuery { code: string; }
export interface WeatherQuery { airportCode: string; }
export interface HazardQuery { poiCoordinates: [number, number]; radiusMiles: number; }

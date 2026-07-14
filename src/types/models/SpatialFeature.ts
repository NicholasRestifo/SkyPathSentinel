import { Feature } from './Feature';
import { GeoJSONGeometry } from './Geometry';

export interface SpatialFeature<TProperties, TGeometry extends GeoJSONGeometry> extends Feature<TProperties> {
  geometry: TGeometry;
}

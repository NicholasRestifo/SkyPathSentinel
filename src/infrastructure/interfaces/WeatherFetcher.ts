import { DataFetcher } from './DataFetcher';
import { WeatherQuery, WeatherFeature } from '../../types/data';

export interface WeatherFetcher extends DataFetcher<WeatherQuery, WeatherFeature> {}

import { DataFetcher } from './DataFetcher';
import { WeatherQuery } from '../../types/queries/WeatherQuery';
import { WeatherFeature } from '../../types/models/WeatherFeature';

export interface WeatherFetcher extends DataFetcher<WeatherQuery, WeatherFeature> {}

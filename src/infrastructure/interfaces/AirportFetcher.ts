import { DataFetcher } from './DataFetcher';
import { AirportQuery, AirportFeature } from '../../types/data';

export interface AirportFetcher extends DataFetcher<AirportQuery, AirportFeature> {}

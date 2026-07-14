import { DataFetcher } from './DataFetcher';
import { AirportQuery } from '../../types/queries/AirportQuery';
import { AirportFeature } from '../../types/models/AirportFeature';

export interface AirportFetcher extends DataFetcher<AirportQuery, AirportFeature> {}

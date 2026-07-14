import { DataFetcher } from './DataFetcher';
import { HazardQuery } from '../../types/queries/HazardQuery';
import { HazardFeature } from '../../types/models/HazardFeature';

export interface HazardFetcher extends DataFetcher<HazardQuery, HazardFeature> {}

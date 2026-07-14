import { DataFetcher } from './DataFetcher';
import { HazardQuery, HazardFeature } from '../../types/data';

export interface HazardFetcher extends DataFetcher<HazardQuery, HazardFeature> {}

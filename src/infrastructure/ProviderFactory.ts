import { ENV, DATA_MODE } from '../constants';
import { StorageProvider } from './interfaces/StorageProvider';
import { CacheProvider } from './interfaces/CacheProvider';
import { AirportFetcher } from './interfaces/AirportFetcher';
import { WeatherFetcher } from './interfaces/WeatherFetcher';
import { HazardFetcher } from './interfaces/HazardFetcher';
import { DataPopulator } from './interfaces/DataPopulator';
import { LocalStorageProvider } from './providers/local/LocalStorageProvider';
import { LocalCacheProvider } from './providers/local/LocalCacheProvider';
import { LiveApiFetcher } from './providers/local/LiveApiFetcher';
import { CannedDataFetcher } from './providers/local/CannedDataFetcher';
import { LocalDataPopulator } from './providers/local/LocalDataPopulator';
import { DeployedStorageProvider } from './providers/deployed/DeployedStorageProvider';
import { DeployedCacheProvider } from './providers/deployed/DeployedCacheProvider';
import { DeployedDataFetcher } from './providers/deployed/DeployedDataFetcher';
import { DeployedDataPopulator } from './providers/deployed/DeployedDataPopulator';
import { AirportQuery, AirportFeature, WeatherQuery, WeatherFeature, HazardQuery, HazardFeature } from '../types/data';

export class ProviderFactory {
  static getStorageProvider(): StorageProvider {
    if (process.env.APP_ENV === ENV.PROD) {
      return new DeployedStorageProvider();
    }
    return new LocalStorageProvider();
  }

  static getCacheProvider(): CacheProvider {
    if (process.env.APP_ENV === ENV.PROD) {
      return new DeployedCacheProvider();
    }
    return new LocalCacheProvider();
  }

  static getAirportFetcher(): AirportFetcher {
    if (process.env.APP_ENV === ENV.PROD) {
      return new DeployedDataFetcher<AirportQuery, AirportFeature>();
    }
    if (process.env.DATA_MODE === DATA_MODE.CANNED) {
      return new CannedDataFetcher<AirportQuery, AirportFeature>();
    }
    return new LiveApiFetcher<AirportQuery, AirportFeature>();
  }

  static getWeatherFetcher(): WeatherFetcher {
    if (process.env.APP_ENV === ENV.PROD) {
      return new DeployedDataFetcher<WeatherQuery, WeatherFeature>();
    }
    if (process.env.DATA_MODE === DATA_MODE.CANNED) {
      return new CannedDataFetcher<WeatherQuery, WeatherFeature>();
    }
    return new LiveApiFetcher<WeatherQuery, WeatherFeature>();
  }

  static getHazardFetcher(): HazardFetcher {
    if (process.env.APP_ENV === ENV.PROD) {
      return new DeployedDataFetcher<HazardQuery, HazardFeature>();
    }
    if (process.env.DATA_MODE === DATA_MODE.CANNED) {
      return new CannedDataFetcher<HazardQuery, HazardFeature>();
    }
    return new LiveApiFetcher<HazardQuery, HazardFeature>();
  }

  static getDataPopulator(): DataPopulator {
    if (process.env.APP_ENV === ENV.PROD) {
      return new DeployedDataPopulator();
    }
    return new LocalDataPopulator();
  }
}

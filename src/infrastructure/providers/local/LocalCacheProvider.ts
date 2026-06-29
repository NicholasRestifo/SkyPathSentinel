import { CacheProvider } from '../../interfaces/CacheProvider';
import { Result, success } from '../../../types/result';
import { PATHS } from '../../../constants/paths';
import * as fs from 'fs/promises';
import * as path from 'path';

export class LocalCacheProvider implements CacheProvider {
  private cacheDir: string;

  constructor(cacheDir: string = PATHS.CACHE) {
    this.cacheDir = cacheDir;
  }

  async get(key: string): Promise<Result<string | null>> {
    const filePath = path.join(this.cacheDir, key);
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      return success(data);
    } catch (e) {
      return success(null);
    }
  }

  async set(key: string, value: string, ttlSeconds: number): Promise<Result<void>> {
    const filePath = path.join(this.cacheDir, key);
    await fs.mkdir(this.cacheDir, { recursive: true });
    await fs.writeFile(filePath, value);
    return success(undefined);
  }
}

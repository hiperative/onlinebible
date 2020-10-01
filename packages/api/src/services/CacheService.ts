import { createClient, RedisClient } from 'redis';

import { REDIS_URL } from "../config";

class Service {
  private redis: RedisClient;

  /**
   * Cache Service uses Redis under the hood.
   * Requires an URI <string> to connect.
   *
   * @param {string} redisUri
   */
  constructor(redisUri) {
    this.redis = createClient(redisUri);
  }

  /**
   * Gets a Promise<string> giving a $key
   *
   * @param {string} key
   * @returns {Promise}
   */
  get (key: string): Promise<string|Error> {
    return new Promise((resolve, reject) => {
      this.redis.get(key, (err, data) => {
        if(err) return reject(err);

        resolve(data);
      })
    })
  }

  /**
   * Stores a value giving a $key and $value
   *
   * @param {string} key
   * @param {string} data
   * @returns {Promise}
   */
  set (key: string, value: string): Promise<string|Error> {
    return new Promise((resolve, reject) => {
      this.redis.set(key, value, (err, ok) => {
        if(err) return reject(err);

        resolve(ok);
      })
    })
  }
}

export const CacheService = new Service(REDIS_URL);

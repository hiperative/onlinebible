import fetch from 'node-fetch';

import { logger } from './../utils/logger';

export enum ResponseFormat {
  Json= 'json',
  Text= 'text',
}

export abstract class BaseService {
  protected apiBaseUrl: string;
  protected requestOptions: {} = {};
  protected responseFormat: string = ResponseFormat.Json;

  async request<T = unknown>(url: string): Promise<T> {
    logger.info(`->begin request to: ${url}`);
    const response = await fetch(new URL(url, this.apiBaseUrl).href, this.requestOptions);

    return await response[this.responseFormat]();
  }
}

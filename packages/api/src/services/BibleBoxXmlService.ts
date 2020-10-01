import {parseString} from 'xml2js';

import { BIBLE_BOX_VERSION } from '../config';
import { logger } from './../utils/logger';
import { BIBLE_BOX_BASE_URL, BOOKS_REF } from '../constants';
import { BaseService, ResponseFormat } from './BaseService';
import { XmlChapterResponse } from '../interfaces';
import { CacheService } from './CacheService';


export class Service extends BaseService {
	constructor() {
		super();
		this.apiBaseUrl = BIBLE_BOX_BASE_URL;
		this.responseFormat = ResponseFormat.Text;
	}

  private normalizeId(id: string){
		const [book, chapter] = id.split('.');

		if(!book || !chapter) throw new Error(`ID ${id} is not acceptable.`);

    return `${BOOKS_REF[book]}/${chapter}`;
  }

  private transformXmlToJson(xml: string): Promise<XmlChapterResponse> {
    return new Promise((resolve, reject) => {
      parseString(xml, (err, result) => {
        if(err) reject(err);

        return resolve(result);
      })
    })
  }

  private async parseXml(xml: string): Promise<Array<{id: number, text: string}>> {
    const { chapter } = await this.transformXmlToJson(xml);

    return chapter.p.map(({_: text}, index) => ({id: index + 1, text}));
  }

  async getVerses({id, bibleId = 'rv'}) {
		try {
			logger.info('->getVerses', id);

			const fromCache = await CacheService.get(id);
			let xml: string;

			if(fromCache) {
				logger.info('->getVerses:cache');

				xml = fromCache as string;
			} else {
				logger.info('->getVerses:request');

				xml = await this.request<string>(`/${BIBLE_BOX_VERSION}/bibles/${bibleId}/${this.normalizeId(id)}.xml`)
				await CacheService.set(id, xml);
			}

			return await this.parseXml(xml);
		} catch (err) {
			logger.error(err);

			throw err;
		}
  }
}

export const BibleBoxXmlService = new Service();

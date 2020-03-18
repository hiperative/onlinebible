import {parseString} from 'xml2js';

import { logger } from './../utils/logger';
import { BaseService, ResponseFormat } from './BaseService';
import { XmlChapterResponse } from '../interfaces';

const BooksRef = {
	"GEN": 1,
	"EXO": 2,
	"LEV": 3,
	"NUM": 4,
	"DEU": 5,
	"JOS": 6,
	"JDG": 7,
	"RUT": 8,
	"1SA": 9,
	"2SA": 10,
	"1KI": 11,
	"2KI": 12,
	"1CH": 13,
	"2CH": 14,
	"EZR": 15,
	"NEH": 16,
	"EST": 17,
	"JOB": 18,
	"PSA": 19,
	"PRO": 20,
	"ECC": 21,
	"SNG": 22,
	"ISA": 23,
	"JER": 24,
	"LAM": 25,
	"EZK": 26,
	"DAN": 27,
	"HOS": 28,
	"JOL": 29,
	"AMO": 30,
	"OBA": 31,
	"JON": 32,
	"MIC": 33,
	"NAM": 34,
	"HAB": 35,
	"ZEP": 36,
	"HAG": 37,
	"ZEC": 38,
	"MAL": 39,
	"MAT": 40,
	"MRK": 41,
	"LUK": 42,
	"JHN": 43,
	"ACT": 44,
	"ROM": 45,
	"1CO": 46,
	"2CO": 47,
	"GAL": 48,
	"EPH": 49,
	"PHP": 50,
	"COL": 51,
	"1TH": 52,
	"2TH": 53,
	"1TI": 54,
	"2TI": 55,
	"TIT": 56,
	"PHM": 57,
	"HEB": 58,
	"JAS": 59,
	"1PE": 60,
	"2PE": 61,
	"1JN": 62,
	"2JN": 63,
	"3JN": 64,
	"JUD": 65,
	"REV": 66
};


export class Service extends BaseService {
	constructor() {
		super();
		this.apiBaseUrl = 'https://data.bcdn.in/';
		this.responseFormat = ResponseFormat.Text;
	}

  private normalizeId(id: string){
    const [book, chapter] = id.split('.');

    return `${BooksRef[book]}/${chapter}`;
  }

  private transformXmlToJson(xml: string): Promise<XmlChapterResponse> {
    return new Promise((resolve, reject) => {
      parseString(xml, (err, result) => {
        if(err) reject();

        return resolve(result);
      })
    })
  }

  private async parseXml(xml: string): Promise<Array<{id: number, text: string}>> {
    const { chapter } = await this.transformXmlToJson(xml);

    return chapter.p.map(({_: text}, index) => ({id: index + 1, text}));
  }

  async getVerses({id, bibleId = 'rv'}) {
		logger.info('->getVerses', id);
    const xml = await this.request<string>(`/v19/bibles/${bibleId}/${this.normalizeId(id)}.xml`)

    return await this.parseXml(xml);
  }
}

export const BibleBoxXmlService = new Service();

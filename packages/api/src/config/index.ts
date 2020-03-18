const { PORT = 4000, NODE_ENV = 'development', API_KEY, BIBLE_ID } = process.env;

if(!(API_KEY && BIBLE_ID)) throw new Error('$API_KEY and/or $BIBLE_ID not defined.');

const IS_PRODUCTION = NODE_ENV === 'production';

export {
  IS_PRODUCTION,
  NODE_ENV,
  PORT,
  API_KEY,
  BIBLE_ID,
}

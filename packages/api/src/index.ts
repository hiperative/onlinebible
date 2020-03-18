import 'dotenv/config';
import { GraphQLServer } from 'graphql-yoga';

import { PORT, IS_PRODUCTION } from './config';
import { logger } from './utils/logger';
import { typeDefs } from './types';
import { resolvers } from './resolvers';

const server = new GraphQLServer({ typeDefs, resolvers })
server.start({port: PORT, ...(IS_PRODUCTION && {playground: false}) },
  () => logger.info(`🔥 Server is running on http://localhost:${PORT}`)
);

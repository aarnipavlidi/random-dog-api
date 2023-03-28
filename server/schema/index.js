
import { makeExecutableSchema } from '@graphql-tools/schema';
import merge from 'lodash.merge';

import schemaDogs from './dogs/index.js';

const schema = makeExecutableSchema({
  typeDefs: [
    schemaDogs.typeDefs,
  ],
  resolvers: merge(
    schemaDogs.resolvers,
  )
});

export default schema;
import path from 'path';
import { registerInitializer, SqljsInitializer } from '@vendure/testing';

registerInitializer(
  'sqljs',
  new SqljsInitializer(path.join(__dirname, '../__data__')),
);

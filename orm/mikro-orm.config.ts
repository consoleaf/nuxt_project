import { Options } from '@mikro-orm/core'
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'
import { User } from './entities'

const config: Options = {
  type: 'sqlite',
  dbName: 'database.sqlite',
  entities: [User],
  highlighter: new SqlHighlighter(),
  debug: true
}

export default config

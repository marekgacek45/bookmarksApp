import { type SchemaTypeDefinition } from 'sanity'

import { stack } from './stack'
import { category } from './category'  
import { item } from './item'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [stack,category,item],
}

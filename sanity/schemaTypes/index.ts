import { type SchemaTypeDefinition } from 'sanity'


import { category } from './category'  
import { item } from './item'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category,item],
}

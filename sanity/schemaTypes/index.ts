import { type SchemaTypeDefinition } from 'sanity'

import { mainCategory } from './main-category'
import { subCategory } from './sub-category'  
import { item } from './item'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mainCategory,subCategory,item],
}

import { Rule, validation } from 'sanity'

export const item = {
	name: 'item',
	title: 'Item',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: Rule) => Rule.required().error('Required'),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
			validation: (Rule: Rule) => Rule.required().error('Required'),
		},
        {
			name: 'link',
			title: 'Link',
			type: 'url',
			validation: (Rule: Rule) => Rule.required().error('Required'),
		},
        {
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: (Rule: Rule) => Rule.max(200).error('Max 200 characters'),
		},
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            validation: (Rule: Rule) => Rule.required().error('Required'),
        },
        { name: 'stacks', title: 'Stacks', type: 'array', of: [{ type: 'reference', to: { type: 'stack' } }] },
        { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: { type: 'category' } }] },
	],
}

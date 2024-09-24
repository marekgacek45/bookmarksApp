import { Rule, validation } from 'sanity'

export const category = {
	name: 'category',
	title: 'Category',
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
	],
}
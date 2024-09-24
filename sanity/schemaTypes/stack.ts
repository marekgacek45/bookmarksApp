import { Rule, validation } from 'sanity'

export const stack = {
	name: 'stack',
	title: 'Stack',
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
            name: 'icon',
            title: 'Icon',
            type: 'image',
            validation: (Rule: Rule) => Rule.required().error('Required'),
        },
	],
}
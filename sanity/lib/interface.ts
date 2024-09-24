export interface Stack {
	_id: string
	title: string
	slug: string
    icon: any
}

export interface Category {
	_id: string
	title: string
	slug: string
}
export interface Item {
	_id: string
	title: string
	slug: string
	link: string
    description: string
    icon: any
	subCategories:Array<Stack>
	mainCategories:Array<Category>
}
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
    icon: string
	mainCategories:Array<Category>
}
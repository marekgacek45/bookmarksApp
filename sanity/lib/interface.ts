export interface MainCategory {
	_id: string
	title: string
	slug: string
    icon: any
}

export interface SubCategory {
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
	subCategories:Array<SubCategory>
	mainCategories:Array<MainCategory>
}
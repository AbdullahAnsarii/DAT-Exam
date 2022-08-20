export interface CategoryInterface {
    slug: string,
    name: string,
    icon: string
}

export interface CategoriesInterface {
    message: string,
    statusCode: number,
    data: CategoryInterface[]
}

export interface CarouselSlideInterface {
    key: number,
    pos: number,
    idx: number,
    _items: {
        id: string,
        slug: string,
        title: string,
        category: string,
        image: string,
        price: number,
        currency: string,
        availableQuantity: number
    }[]
}
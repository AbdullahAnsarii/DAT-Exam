import { Dispatch, SetStateAction } from "react"

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

export interface MenuItem {
    id: string,
    slug: string,
    title: string,
    category: string,
    image: string,
    price: number,
    currency: string,
    availableQuantity: number,
    selectedQuantity: number
}

export interface CarouselSlideInterface {
    key: number,
    pos: number,
    idx: number,
    cart: MenuItem[],
    setCart:Dispatch<SetStateAction<MenuItem[]>>
    _items: MenuItem[]
}
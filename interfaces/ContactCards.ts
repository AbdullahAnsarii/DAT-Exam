export interface ContactInterface {
    id: number,
    slug: string,
    title: string,
    description: string,
    icon: string
}

export interface ContactsInterface {
    message: string,
    statusCode: number,
    data: ContactInterface[]
}
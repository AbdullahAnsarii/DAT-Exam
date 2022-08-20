export default interface ContactInterface {
    id: number,
    slug: string,
    title: string,
    description: string,
    icon: string
}

export default interface ContactsInterface {
    message: string,
    statusCode: number,
    data: ContactInterface[]
}
export interface Post {
    id: string,
    imageUrl: string,
    title: string,
    description: string
}

export interface CreatePostDTO {
    imageUrl: string,
    title: string,
    description: string
}
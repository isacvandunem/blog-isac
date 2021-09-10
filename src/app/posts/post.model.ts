import { APIPost } from "../core/APIModels/api-post.model";

export class Post {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public publishDate: Date,
        public slug: string,
        public description: string,
        public content: string){
    }

    static fromAPI(post: APIPost): Post {
        return new Post(
            post.id,
            post.title,
            post.author,
            new Date(post.publish_date),
            post.slug,
            post.description,
            post.content)
    }
}
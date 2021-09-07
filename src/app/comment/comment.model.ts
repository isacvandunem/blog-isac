import { APIComment } from "../APIModels/api-comment.model";

export class Comment {
    constructor(
        public id: number, 
        public postId: number, 
        public parentId: number | null,
        public user: string,
        public date: Date,
        public content: string){}

    static fromAPI(comment: APIComment): Comment {
        return new Comment(
            comment.id,
            comment.postId,
            comment.parent_id,
            comment.user,
            new Date(comment.date),
            comment.content)
    }
}
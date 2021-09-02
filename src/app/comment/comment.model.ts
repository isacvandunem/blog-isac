export class Comment {
    constructor(
        public id: number, 
        public postId: number, 
        public parentId: number,
        public user: string,
        public date: Date,
        public content: string){}
}
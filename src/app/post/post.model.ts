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
}
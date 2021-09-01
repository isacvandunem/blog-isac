export class Post {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public slug: string,
        public description: string,
        public content: string){
    }
}
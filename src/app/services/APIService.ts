import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "../post/post.model";
import { Comment } from "../comment/comment.model";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class APIService {
    constructor(private http: HttpClient) { }

    /**
     * Gets all the posts from the API
     */
    public getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(environment.apiBaseUrl + "/posts").pipe(
            map((data: any[]) =>
                data.map((item: any) =>
                    new Post(
                        item.id,
                        item.title,
                        item.author,
                        new Date(item.publish_date),
                        item.slug,
                        item.description,
                        item.content)
                )
            )
        );
    }

    /**
     * Gets a post from the API based on its id
     * @param postId The post to fetch
     * @returns The post
     */
    public getPost(postId: number): Observable<Post> {
        return this.http.get<Post>(environment.apiBaseUrl + "/posts/" + postId).pipe(
            map((item: any) =>
                new Post(
                    item.id,
                    item.title,
                    item.author,
                    new Date(item.publish_date),
                    item.slug,
                    item.description,
                    item.content)
            )
        );
    }

    /**
     * Gets all the comments from the API
     * @returns The comments
     */
    public getComments(postId: number): Observable<Comment[]> {
        const url = `${environment.apiBaseUrl}/posts/${postId}/comments`;
        return this.http.get<Comment[]>(url).pipe(
            map((data: any[]) =>
                data.map((item: any) =>
                    new Comment(
                        item.id,
                        item.postId,
                        item.parent_id,
                        item.user,
                        new Date(item.date),
                        item.content)
                )
            )
        );
    }

    /**
     * Adds a comment to a post by posting to the correct API resource
     * @param postId The relevant post postId
     * @param content The content for the new comment
     * @param user The user making the comment
     * @returns The added comment
     */
    public addComment(postId: number, content: string, user: string): Observable<Comment> {
        const url = `${environment.apiBaseUrl}/posts/${postId}/comments`;
        const headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        const body = { user, content, date: new Date().toDateString() };
        return this.http.post<number>(url, body, headers).pipe(
            map((item: any) => new Comment(
                item.id,
                item.postId,
                item.parent_id,
                item.user,
                new Date(item.date),
                item.content)
            )
        );
    }
}
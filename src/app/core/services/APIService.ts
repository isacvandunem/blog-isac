import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "../../posts/post.model";
import { Comment } from "../../comments/comment.model";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { APIPost } from "../APIModels/api-post.model";
import { APIComment } from "../APIModels/api-comment.model";

@Injectable({ providedIn: 'root' })
export class APIService {
    constructor(private http: HttpClient) { }

    /**
     * Gets all the posts from the API
     */
    public getPosts(): Observable<Post[]> {
        return this.http.get<APIPost[]>(environment.apiBaseUrl + "/posts").pipe(
            map((data: APIPost[]) => 
                data.map((post: APIPost) => Post.fromAPI(post))
            )
        );
    }

    /**
     * Gets a post from the API based on its id
     * @param postId The post to fetch
     * @returns The post
     */
    public getPost(postId: number): Observable<Post> {
        return this.http.get<APIPost>(environment.apiBaseUrl + "/posts/" + postId).pipe(
            map((post: APIPost) => Post.fromAPI(post))
        );
    }

    /**
     * Gets all the comments from the API
     * @returns The comments
     */
    public getComments(postId: number): Observable<Comment[]> {
        const url = `${environment.apiBaseUrl}/posts/${postId}/comments`;
        return this.http.get<APIComment[]>(url).pipe(
            map((data: APIComment[]) =>
                data.map((comment: APIComment) => Comment.fromAPI(comment))
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
        return this.http.post<APIComment>(url, body, headers).pipe(
            map((comment: APIComment) => Comment.fromAPI(comment))
        );
    }
}
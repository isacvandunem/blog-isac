import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from "../post/post.model";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class APIService {
    constructor(private http: HttpClient){}

    public getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(environment.apiBaseUrl + "/posts").pipe(
            map((data: any[]) =>
                data.map((item: any) => {
                    return new Post(
                        item.id, 
                        item.title, 
                        item.author,
                        item.slug,
                        item.description,
                        item.content
                    );
                })
            )
        );
    }
}
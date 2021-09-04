import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../post/post.model';
import { APIService } from '../services/APIService';
import { ToastComponent } from '../toast/toast.component';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
    @ViewChild('toast') toast!: ToastComponent;
    public posts: Post[] = [];
    public loading = false;

    constructor(private apiService: APIService) { }

    ngOnInit(): void {
        this.loading = true;
        this.apiService.getPosts().subscribe(posts => {
            posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
            this.posts = posts;
            this.loading = false;
        }, error => {
            this.loading = false;
            this.toast.show("Error", "Error loading comments. Please try again later");
        });
    }
}

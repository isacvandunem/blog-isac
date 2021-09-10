import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../post.model';
import { APIService } from '../../core/services/APIService';
import { ToastComponent } from '../../shared/toast/toast.component';

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
        this.loadAndSortPosts();
    }

    /**
     * Loads all posts from the API and sorts them by newest first
     */
    loadAndSortPosts(): void {
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

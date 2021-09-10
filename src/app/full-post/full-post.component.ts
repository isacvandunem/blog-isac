import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post/post.model';
import { Comment } from '../comment/comment.model';
import { APIService } from '../services/APIService';
import { ToastComponent } from '../toast/toast.component';

@Component({
    selector: 'app-full-post',
    templateUrl: './full-post.component.html',
    styleUrls: ['./full-post.component.scss']
})
export class FullPostComponent implements OnInit {
    @ViewChild('toast') toast!: ToastComponent;
    public post: Post | undefined;
    public loading: boolean = false;
    public comments: Comment[] | undefined;
    public loadingComments: boolean = false;

    constructor(private activatedRoute: ActivatedRoute, private apiService: APIService) {}

    ngOnInit(): void {
        if (this.activatedRoute.snapshot.params['id']) {
            const postId = this.activatedRoute.snapshot.params['id'];
            this.loadPost(postId);
            this.loadComments(postId);
        }
    }

    /**
     * Fetches the comments of a post from the API based on a given id
     * @param postId The id of the post to get the comments
     */
    loadPost(postId: number): void {
        this.loading = true;
        this.apiService.getPost(postId).subscribe(post => {
            this.post = post;
            this.loading = false;
        }, error => {
            this.loading = false;
            this.toast.show("Error", "Error loading post. Please try again later");
        });

    }

    /**
     * Fetches a post from the API based on a given id
     * @param postId The id of the post to fetch
     */
    loadComments(postId: number): void {
        this.loadingComments = true;
        this.apiService.getComments(postId).subscribe(comments => {
            this.comments = comments;
            this.loadingComments = false;
        }, error => {
            this.loadingComments = false;
            this.toast.show("Error", "Error loading comments. Please try again later");
        });
    }

    /**
     * Adds a comment to the current post comments list
     * @param comment The comment to be added
     */
    addCommentToList(comment: Comment): void {
        if (!this.comments) {
            this.comments = [];
        }
        this.comments?.push(comment);
    }
}

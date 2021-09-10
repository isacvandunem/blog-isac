import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { PostComponent } from './posts/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './shared/loader/loader.component';
import { FullPostComponent } from './posts/full-post/full-post.component';
import { CommentComponent } from './comments/comment/comment.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './shared/toast/toast.component';

@NgModule({
    declarations: [
        AppComponent,
        PostsListComponent,
        NavBarComponent,
        PostComponent,
        LoaderComponent,
        FullPostComponent,
        CommentComponent,
        AddCommentComponent,
        ToastComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

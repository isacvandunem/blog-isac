import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPostComponent } from './posts/full-post/full-post.component';
import { FullPostModule } from './posts/full-post/full-post.module';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsListModule } from './posts/posts-list/posts-list.module';

const routes: Routes = [
    { path: '', component: PostsListComponent },
    { path: 'posts/:id', component: FullPostComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes), 
        PostsListModule, 
        FullPostModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

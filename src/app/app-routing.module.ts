import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPostComponent } from './full-post/full-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
    { path: '', component: PostsListComponent },
    { path: 'posts/:id', component: FullPostComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

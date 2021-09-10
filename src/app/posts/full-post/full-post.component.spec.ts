import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Post } from '../post.model';
import { Comment } from '../../comments/comment.model';
import { ToastComponent } from '../../shared/toast/toast.component';
import { FullPostComponent } from './full-post.component';

describe('FullPostComponent', () => {
    let component: FullPostComponent;
    let fixture: ComponentFixture<FullPostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FullPostComponent, ToastComponent],
            imports: [HttpClientTestingModule, RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FullPostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render post props properly', () => {
        component.post = new Post(1, "some title", "some author", new Date(), "some slug", "some desc", "some content");
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector(".author")?.textContent).toContain(component.post?.author);
        expect(compiled.querySelector(".title")?.textContent).toContain(component.post?.title);
        expect(compiled.querySelector(".content")?.innerHTML).toContain(component.post?.content);
    });

    it('should add a comment if none exist', () => {
        component.post = new Post(1, "some title", "some author", new Date(), "some slug", "some desc", "some content");
        const comment = new Comment(1, 1, 1, "some user", new Date(), "some content");
        component.addCommentToList(comment);
        expect(component.comments?.length).toEqual(1);
        expect(component.comments && component.comments[0].user).toEqual("some user");
    });

    it('should add a comment on existing comments', () => {
        component.post = new Post(1, "some title", "some author", new Date(), "some slug", "some desc", "some content");
        const comment = new Comment(1, 1, 1, "some user", new Date(), "some content");
        component.addCommentToList(comment);
        const comment2 = new Comment(2, 2, 2, "some other user", new Date(), "some other content");
        component.addCommentToList(comment2);
        expect(component.comments?.length).toEqual(2);
        expect(component.comments && component.comments[1].user).toEqual("some other user");
    });
});

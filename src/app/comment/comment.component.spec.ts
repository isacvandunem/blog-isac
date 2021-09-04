import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comment } from "./comment.model";
import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
    let component: CommentComponent;
    let fixture: ComponentFixture<CommentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CommentComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentComponent);
        component = fixture.componentInstance;
        component.comment = new Comment(1, 1, 1, "some user", new Date(), "Some content");
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render user and content properly', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector(".user")?.textContent).toContain(component.comment.user);
        expect(compiled.querySelector(".text p")?.textContent).toContain(component.comment.content);
    });
});

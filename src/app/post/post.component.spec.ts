import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostComponent } from './post.component';
import { Post } from './post.model';

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostComponent],
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        component.post = new Post(1, "some title", "some author", new Date(), "some slug", "some desc", "some content");
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title, author and description properly', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector(".card-title")?.textContent).toContain(component.post.title);
        expect(compiled.querySelector(".author-date")?.textContent).toContain(component.post.author);
        expect(compiled.querySelector(".description")?.textContent).toContain(component.post.description);
    });
});

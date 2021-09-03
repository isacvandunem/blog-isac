import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Post } from '../post/post.model';

import { FullPostComponent } from './full-post.component';

describe('FullPostComponent', () => {
  let component: FullPostComponent;
  let fixture: ComponentFixture<FullPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPostComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
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
});

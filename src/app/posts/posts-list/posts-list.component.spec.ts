import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsListComponent } from './posts-list.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { ToastComponent } from '../../shared/toast/toast.component';

describe('PostsListComponent', () => {
    let component: PostsListComponent;
    let fixture: ComponentFixture<PostsListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostsListComponent, LoaderComponent, ToastComponent],
            imports: [HttpClientTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PostsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddCommentComponent } from './add-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from '../toast/toast.component';

describe('AddCommentComponent', () => {
    let component: AddCommentComponent;
    let fixture: ComponentFixture<AddCommentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddCommentComponent, ToastComponent],
            imports: [HttpClientTestingModule, ReactiveFormsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddCommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

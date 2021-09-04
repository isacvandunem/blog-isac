import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
    let component: ToastComponent;
    let fixture: ComponentFixture<ToastComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ToastComponent],
            imports: [HttpClientTestingModule, RouterTestingModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title and message', () => {
        component.show("abc", "def");
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector(".toast-title")?.textContent).toContain(component.title);
        expect(compiled.querySelector(".toast-body")?.textContent).toContain(component.message);
    });

    it('should show the component if show is called', () => {
        component.show("test", "test");
        expect(component.visible).toBeTrue();
    });

    it('should close the component if close is called', () => {
        component.close();
        expect(component.visible).toBeFalse();
    });
});

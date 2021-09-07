import { Component, Input, OnDestroy, OnInit } from '@angular/core';
const defaultCloseDelay = 15000;

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
    @Input() title: string = "";
    @Input() message: string = "";
    visible: boolean = false;
    timer: NodeJS.Timeout | undefined;

    constructor() { }

    ngOnDestroy(): void {
        if(this.timer) {
            clearTimeout(this.timer);
        }
    }

    ngOnInit(): void {
    }

    /**
     * Makes the toast not visible
     */
    close(): void {
        this.visible = false;
    }

    /**
     * Shows a toast message that is kept on the screen for a specified amount of time.
     * @param title The toast title
     * @param message The toast message
     */
    show(title: string, message: string): void {
        this.title = title;
        this.message = message;
        this.visible = true;

        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
            this.close();
        }, defaultCloseDelay);
    }
}

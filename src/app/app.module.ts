import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarModule } from './shared/nav-bar/nav-bar.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NavBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

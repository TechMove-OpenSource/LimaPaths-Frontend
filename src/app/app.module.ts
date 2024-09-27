import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import {BrowserModule} from "@angular/platform-browser";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {AppComponent} from "./app.component";

@NgModule({
  declarations:[AppComponent],
  imports: [ AppRoutingModule, BrowserModule],
  providers: [provideAnimationsAsync()],
bootstrap: [AppComponent]
})
export  class AppModule { }

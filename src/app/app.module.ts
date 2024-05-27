import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FruitModule } from './fruit/fruit.module';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient, withFetch } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,FruitModule,RouterOutlet

  ],
  providers: [
    provideClientHydration()
 ,provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID  /* Fecha Español */, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es'; // Fecha Español
import { registerLocaleData } from '@angular/common'; // Fecha Español
registerLocaleData(localeEs); // Fecha Español

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';




@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

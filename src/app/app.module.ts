import { CurrencyDetails } from './currencydetails/currency-details.component';
import { DisplayTable } from './currencydisplay/display-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTable,
    CurrencyDetails
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

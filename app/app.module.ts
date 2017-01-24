import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { TraderComponent }   from './trader/trader.component';
import { AddTradeComponent }   from './trader/add-trade/add-trade.component';

import { TraderService } from './trader/trader.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [
    TraderService
  ],
  declarations: [ 
    AppComponent, 
    TraderComponent,
    AddTradeComponent
  ],
  bootstrap:     [ AppComponent]
})
export class AppModule { }

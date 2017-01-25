import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';
import { TraderComponent }    from './trader/trader.component';
import { AddTradeComponent }  from './trader/add-trade/add-trade.component';

import { TraderService }  from './trader/trader.service';
import { HttpService }    from './http/http.service';
import { HostManager }    from './http/host-manager.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TraderService,
    HttpService,
    HostManager
  ],
  declarations: [ 
    AppComponent, 
    TraderComponent,
    AddTradeComponent
  ],
  bootstrap:     [ AppComponent]
})
export class AppModule { }

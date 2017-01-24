import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal';

import { AddTradeComponent } from './add-trade.component';

@NgModule({
  imports:      [ BrowserModule, Ng2Bs3ModalModule],
  declarations: [ AddTradeComponent ],
  bootstrap:     [ AddTradeComponent]
})
export class AddTradeModule { }

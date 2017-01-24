import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TraderComponent } from './trader.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TraderComponent ],
  bootstrap:     [ TraderComponent]
})
export class TraderModule { }

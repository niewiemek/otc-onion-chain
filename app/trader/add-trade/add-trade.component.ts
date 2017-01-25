import { Component, ViewChild } from '@angular/core';
import { AddTrade } from '../../model/add-trade.model'

import { TraderService } from '../trader.service';

@Component({
  moduleId: module.id,
  selector: 'add-trade',
  templateUrl: 'add-trade.html'
})
export class AddTradeComponent { 

  constructor(private traderService: TraderService) {}

  newTrade = new AddTrade();
  
  public addTrade() {
    this.traderService.saveTrade(this.newTrade);
  }

  public cancelTrade() {
    this.newTrade = new AddTrade();
  }
}

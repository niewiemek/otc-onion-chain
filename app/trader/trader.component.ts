import { Component } from '@angular/core';
import { ForwardOrder } from '../model/trade'

import { TraderService } from './trader.service';

@Component({
  moduleId: module.id,
  selector: 'trader',
  templateUrl: 'trader.html'
})
export class TraderComponent { 

  constructor(private traderService: TraderService) {}

  trades = this.traderService.listTrades();
}

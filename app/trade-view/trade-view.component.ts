import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { HostManager }        from '../http/host-manager.service';
import { TradeViewService } from './trade-view.service'

@Component({
  moduleId: module.id,
  selector: 'trade-view',
  templateUrl: 'trade-view.html'
})
export class TradeViewComponent implements OnInit, OnDestroy { 

  trades: any[];
  private sub: any;

  constructor(
    private tradeViewService: TradeViewService, 
    private hostManager: HostManager, 
    private route: ActivatedRoute
    ) {}

  approve(id: string) {
    this.tradeViewService.approve(id).then(() => {this.findAndBindTrades()});
  }

  ngOnInit() {
    console.log('Initiating node..');

    this.sub = this.route.params.subscribe(params => {
      // Notify host manager about our backend
      this.hostManager.setNode(params['node']); 
      console.log('Node host set to ' + this.hostManager.getHostName());
    });

    this.findAndBindTrades();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private findAndBindTrades() {
    this.tradeViewService.findTradingOrders().then((trades) => {
      this.trades = trades;
    });
  }
}

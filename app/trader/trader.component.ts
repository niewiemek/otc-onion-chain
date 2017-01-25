import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ForwardOrder } from '../model/trade'

import { TraderService } from './trader.service';
import { HostManager }    from '../http/host-manager.service';

@Component({
  moduleId: module.id,
  selector: 'trader',
  templateUrl: 'trader.html'
})
export class TraderComponent implements OnInit, OnDestroy { 

  trades: any;
  private sub: any;

  constructor(private traderService: TraderService, private hostManager: HostManager, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('Initiating node..');

    this.sub = this.route.params.subscribe(params => {
      // Notify host manager about our backend
      this.hostManager.setNode(params['node']); 
      console.log('Node host set to ' + this.hostManager.getHostName());
      this.trades = this.traderService.listTrades();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

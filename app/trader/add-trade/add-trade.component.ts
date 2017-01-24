import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { ForwardOrder } from '../../model/trade'

import { TraderService } from '../trader.service';

@Component({
  moduleId: module.id,
  selector: 'add-trade',
  templateUrl: 'add-trade.html'
})
export class AddTradeComponent { 

  constructor(private traderService: TraderService) {}

    @ViewChild('myModal')
    modal: ModalComponent;

    close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }
}

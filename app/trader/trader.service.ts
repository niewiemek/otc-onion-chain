import { Injectable } from '@angular/core';
import { ForwardOrder } from '../model/trade';

@Injectable()
export class TraderService {

    listTrades(): ForwardOrder[] {
        return [
            new ForwardOrder("uuid", "EURUSD", 10000000, "1 Month"),
            new ForwardOrder("uuid-2", "EURUSD", -153252000, "1 Month")
        ];
    } 
}
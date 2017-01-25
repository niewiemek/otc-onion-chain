import { Injectable }   from '@angular/core';

import { ForwardOrder } from '../model/trade';
import { AddTrade }     from '../model/add-trade.model';
import { HttpService }  from '../http/http.service'


@Injectable()
export class TraderService {

    private static readonly ENDPOINT_ADD_TRADE = 'api/example/create-trade-order';

    constructor(private httpService : HttpService) {}

    listTrades(): ForwardOrder[] {
        return [
            new ForwardOrder("uuid", "EURUSD", 10000000, "1 Month"),
            new ForwardOrder("uuid-2", "EURUSD", -153252000, "1 Month")
        ];
    }

    saveTrade(addTrade: AddTrade) {
        return this.httpService.put(addTrade, TraderService.ENDPOINT_ADD_TRADE);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
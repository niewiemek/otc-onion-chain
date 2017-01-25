import { Injectable }   from '@angular/core';
import { Response } from '@angular/http';

import { HttpService }  from '../http/http.service'

@Injectable()
export class TradeViewService {

    constructor(private httpService: HttpService) {}

    public approve(id: string) : Promise<void> {
        return this.httpService.post('api/example/approve-trade/'+id);
    }

    public findTradingOrders(): Promise<Object[]> {
        return this.httpService.get('api/example/trading-orders', (response: Response) => {
            return response.json() as Object[]
        });
    }
}
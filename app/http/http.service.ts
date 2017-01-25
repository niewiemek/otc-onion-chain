import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import { HostManager }      from './../http/host-manager.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    private static readonly HEADERS = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private hostManager: HostManager) {}

    public put(object, endpoint: string) {
        let url = this.hostManager.getHostName() + endpoint;
        return this.http
            .put(url, JSON.stringify(object), { headers: HttpService.HEADERS})
            .toPromise()
            .then((res) => {
                console.log(res);
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
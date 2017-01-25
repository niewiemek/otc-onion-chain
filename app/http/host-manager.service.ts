import { Injectable } from '@angular/core';

@Injectable()
export class HostManager {

    private static readonly HOST_MAP : { [key:string]:string; } = {
        "NodeA" : "http://localhost:10005/",
        "NodeB" : "http://localhost:10007/",
        "NodeC" : "http://localhost:10009/",
        "RiskManagerA" : "http://localhost:10011/",
        "RiskManagerB" : "http://localhost:10013/"
    };

    node: string;

    public setNode(name: string) {
        this.node = name
    }

    public getHostName() {
        return HostManager.HOST_MAP[this.node];
    }


}
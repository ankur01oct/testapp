import { Currency } from './currency.model';
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class DisplayService {
    private currency: Currency[];
    constructor(private http: Http) {};


    getMessages() {
        return this.http.get('https://api.coinmarketcap.com/v2/ticker/?convert=INR&limit=20')
            .map((response: Response) => {
               console.log(response.json().data);
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}
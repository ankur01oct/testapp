import { Currency } from './currency.model';
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class DisplayService {
    private currencies: Currency[];
    constructor(private http: Http) {};


    getMessages() {
        return this.http.get('https://api.coinmarketcap.com/v2/ticker/?convert=INR&start=1&limit=20&sort=rank&structure=array')
            .map((response: Response) => {
               const currencies=(response.json().data);
               console.log(currencies);
               let transformedcurrencies : Currency[]=[];
               for(let currency of currencies){
                   transformedcurrencies.push(new Currency(currency.id,
                    currency.rank,
                    currency.name,
                    currency.quotes.INR.market_cap,
                    currency.quotes.INR.price,
                    currency.quotes.INR.volume_24h,
                    currency.circulating_supply
                ))
               }
               this.currencies=(transformedcurrencies);
               return transformedcurrencies;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}
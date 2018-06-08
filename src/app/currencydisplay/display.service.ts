import { Currency } from './currency.model';
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class DisplayService {
    private currencies: Currency[];
    constructor(private http: Http) {};
    private currencyType: string=null;
    private  reqUrl:string;
        setSettings(currency: string) {
            sessionStorage.setItem("CURRENCYKEY", (currency));
        }

        getUserSettings() {
            let currency = sessionStorage.getItem("CURRENCYKEY");
            this.currencyType=currency;
            return (currency);
        }
       
       private getUrl(){
           
        }
       
    getCurrencies() {
      
                        // if(this.currencyType=="INR"){
                        //     this.reqUrl="https://api.coinmarketcap.com/v2/ticker/?convert=INR&start=1&limit=20&sort=rank&structure=array"
                        // }
                        // if(this.currencyType=="EUR"){
                        //     this.reqUrl="https://api.coinmarketcap.com/v2/ticker/?convert=EUR&start=1&limit=20&sort=rank&structure=array"
                        // }
                        // if(this.currencyType=="USD"){
                        //     this.reqUrl="https://api.coinmarketcap.com/v2/ticker/?convert=USD&start=1&limit=20&sort=rank&structure=array"
                        // }
                        // if(!this.currencyType){
                        //     this.reqUrl="https://api.coinmarketcap.com/v2/ticker/?convert=INR&start=1&limit=20&sort=rank&structure=array"
                        //     this.currencyType="INR";
                        // }
                      this.reqUrl=`https://api.coinmarketcap.com/v2/ticker/?convert=${this.getUserSettings()?this.getUserSettings():'INR'}&start=1&limit=20&sort=rank&structure=array`
                        
                        console.log((this.getUserSettings()));
                        console.log(this.currencyType   +(this.currencyType=="EUR"));
                        console.log("currency type before req: "+this.currencyType+" "+this.reqUrl);
        
        return this.http.get(this.reqUrl)
            .map((response: Response) => {
               const currencies=(response.json().data);
               console.log(currencies);
               console.log("currency type after req: "+this.currencyType);
               let transformedcurrencies : Currency[]=[];
               for(let currency of currencies){
                   transformedcurrencies.push(new Currency(currency.id,
                    currency.rank,
                    currency.name,
                    currency.quotes[this.getUserSettings()?this.getUserSettings():'INR'].market_cap,
                    currency.quotes[this.getUserSettings()?this.getUserSettings():'INR'].price,
                    currency.quotes[this.getUserSettings()?this.getUserSettings():'INR'].volume_24h,
                    currency.circulating_supply
                ))
               }
               this.currencies=(transformedcurrencies);
               return transformedcurrencies;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    getIndividualCurrency(name:string){
        for (let currency of this.currencies){
            if(currency.name==name){
                return this.http.get(`https://api.coinmarketcap.com/v2/ticker/${currency.id}/?convert=${this.getUserSettings()?this.getUserSettings():'INR'}&structure=array`)
                .map((response:Response) => {
                    console.log(response.json().data[0]);
                    const current_currency=response.json().data[0];
                    
                    return current_currency;
                })
                .catch((error: Response) => Observable.throw(error));

            }
        }
    }

}
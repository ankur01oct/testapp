import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";
import "rxjs/add/operator/map";
import { DisplayService } from '../currencydisplay/display.service';

@Component({
    selector:'currency-details',
    templateUrl:'currency-details.component.html'
})
export class CurrencyDetails implements OnInit {
    constructor(private route: ActivatedRoute,
         private location: Location,
         private displayservice:DisplayService){};
    
    name:string;
    data:any[]=[];
    currencyType = this.displayservice.getUserSettings()?this.displayservice.getUserSettings():'INR';
    marketcap:any;
    Percent_Change_1h:any;
    ngOnInit():void {
        this.route.params.forEach((params: Params) => {
            this.name=params['name'];
            //console.log(params['name']);
            this.displayservice.getIndividualCurrency(this.name).subscribe(
                (response:any) => {
                    this.data=response;
                    this.marketcap=response.quotes[this.currencyType].market_cap;
                    this.Percent_Change_1h=response.quotes[this.currencyType].percent_change_1h;
                    console.log(this.data);
                }
            )
        });
}
goBack(): void {
    this.location.back();
}
}
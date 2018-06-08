import { DisplayService } from './display.service';
import { OnInit, Component } from "@angular/core";
import { Currency } from './currency.model';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Component({
    selector : 'display-table',
    templateUrl : 'display-table.component.html'
})

export class DisplayTable implements OnInit{
    currencies:Currency[]=[];
    currencyType:string = "EUR";
    constructor(private displayservice:DisplayService){};
    ngOnInit(){
        this.displayservice.getCurrencies().subscribe(
            ( currencies:Currency[]) => {
                this.currencies=currencies;
                if(this.displayservice.getUserSettings()){
                    //already selected currency
                    this.currencyType=this.displayservice.getUserSettings();
                }
                console.log(`getting from localstorage ${this.displayservice.getUserSettings()}`);
            },
            error => console.error("on load "+error)
        );
    }
    onSelect(value:string){
        console.log(value);
        this.currencyType=value;
        this.displayservice.setSettings(value);
        this.displayservice.getCurrencies().subscribe(
            ( currencies:Currency[]) => {
                
                this.currencies=currencies;
                console.log("onSelectExecuted");
            },
            error => console.error("on select: "+error)
        )
        
    }
}


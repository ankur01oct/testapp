import { DisplayService } from './display.service';
import { OnInit, Component } from "@angular/core";
import { Currency } from './currency.model';
@Component({
    selector : 'display-table',
    templateUrl : 'display-table.component.html'
})

export class DisplayTable implements OnInit{
    currencies:Currency[]=[];
    constructor(private displayservice:DisplayService){};
    ngOnInit(){
        this.displayservice.getCurrencies().subscribe(
            ( currencies:Currency[]) => {
                this.currencies=currencies;
                console.log(this.currencies);
            }
        );
    }
}
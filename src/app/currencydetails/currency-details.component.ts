import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";
import "rxjs/add/operator/map";

@Component({
    selector:'currency-details',
    template:`<div  class="col-md-8 col-md-offset-2 justify-content-center">
    <h2>{{name}}</h2>
    <div>
            <label>ID: </label>{{name}}
    </div>
    
</div>
    `
})
export class CurrencyDetails implements OnInit {
    constructor(private route: ActivatedRoute, private location: Location){
    }
    name:string;
    ngOnInit():void {
        this.route.params.forEach((params: Params) => {
            this.name=params['name'];
            console.log(params['name']);
        });
}
}
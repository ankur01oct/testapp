import { DisplayTable } from './currencydisplay/display-table.component';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyDetails } from './currencydetails/currency-details.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/currencies', pathMatch: 'full' },
    { path: 'currencies', component: DisplayTable },
    { path: 'currencies/:name', component: CurrencyDetails }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
import { DisplayService } from './currencydisplay/display.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[DisplayService]
})
export class AppComponent {
  title = 'app';
}

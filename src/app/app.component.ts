import { Component } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'popper-app';

  readonly NgxPopperTriggers = NgxPopperjsTriggers;
  readonly NgxPopperPlacements = NgxPopperjsPlacements;
}

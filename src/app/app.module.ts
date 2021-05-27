import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPopperjsModule } from 'ngx-popperjs';

import { AppComponent } from './app.component';
import { TooltipModule } from './tooltip/tooltip.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TooltipModule, NgxPopperjsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

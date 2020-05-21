import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './Componnents/control-panel/control-panel.component';
import { MatchListComponent } from './Componnents/match-list/match-list.component';
import { ControlComponent } from './Componnents/control/control.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    MatchListComponent,
    ControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

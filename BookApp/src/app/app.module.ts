import { ComputationServiceService } from 'src/app/computation-services/computation-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BettingForkModule } from './betting-fork/betting-fork.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BettingForkModule,
    BrowserAnimationsModule
  ],
  providers: [ComputationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

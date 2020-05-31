import { environment } from './../environments/environment';
import { ComputationServiceService } from 'src/app/computation-services/computation-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BettingForkModule } from './betting-fork/betting-fork.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BettingForkModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebas),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ComputationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

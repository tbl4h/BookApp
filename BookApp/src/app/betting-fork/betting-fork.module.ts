import { StartingValueService } from './../computation-services/starting-value.service';
import { ExpectedValueService } from './../computation-services/expected-value.service';
import { ComputationServicesModule } from './../computation-services/computation-services.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { CreateBettingForkComponent } from './create-betting-fork/create-betting-fork.component';
import { ForkInfoComponent } from './fork-info/fork-info.component';

@NgModule({
  declarations: [
    CreateBettingForkComponent,
    ForkInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    StartingValueService,
    ExpectedValueService,

  ],
  exports: [
    CreateBettingForkComponent
  ]
})
export class BettingForkModule { }

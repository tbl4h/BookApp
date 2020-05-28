import { ExpectedValueService } from './expected-value.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartingValueService } from './starting-value.service';


@NgModule({
  providers: [StartingValueService, ExpectedValueService],
  imports: [
    CommonModule,
  ],
  exports: [],
})
export class ComputationServicesModule { }

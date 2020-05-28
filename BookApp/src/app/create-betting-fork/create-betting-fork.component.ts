import { BettingForkData } from './../MockFiles/bettingFork';
import { ComputationServicesModule } from './../computation-services/computation-services.module';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-betting-fork',
  templateUrl: './create-betting-fork.component.html',
  styleUrls: ['./create-betting-fork.component.css']
})
export class CreateBettingForkComponent implements OnInit {

  /* Useful in template form type */
  // BettingForkData;
  
  /* Reactive form Data */
  startingValue = new FormControl(0);
  expectedValue = new FormControl(0);
  wholeBudget = new FormControl(0);
  minProbabilityPerCombination = new FormControl(0);
  minProfitPerCombination = new FormControl(0);
  minSucceedDraw  = new FormControl(0);
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { ForkInfoData } from './../Interfaces/forkInfo';
import { BettingForkData } from './../Interfaces/bettingFork';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComputationServiceService implements BettingForkData {

  /* Implementation BettingForkData */
  startingValue: number;
  expectedValue: number;
  wholeBudget: number;
  minProbabilityPerCombination: number;
  minProfitPerCombination: number;
  minSuccedDraw: number;
  /* Boilerplate-code */
  /* Implements ForkInfoData */
  expectedValueInUnits: number;
  /* Create Subject */
  public subjExpectedValueInUnits = new Subject<number>(); // number
  
  /* Observers */
  obsStartingValue = {
    next: x => { this.StartingValue = x; },
    error: err => console.error('obsStartingValue got an error: ' + err),
    complete: () => console.log('obsStartingValue got a complete notification'),
  };
  obsExpectedValue = {
    next: x => { this.expectedValue = x; },
    error: err => console.error('obsExpectedValue got an error: ' + err),
    complete: () => console.log('obsExpectedValue got a complete notification'),
  };
  obsWholeBudget = {
    next: x => { this.wholeBudget = x; },
    error: err => console.error('obsWholeBudget got an error: ' + err),
    complete: () => console.log('obsWholeBudget got a complete notification'),
  };
  
  
  /* Getters and Setters */
set StartingValue(value: number) {
    this.startingValue = value;
  }
set ExpectedValue(value: number) {
    this.expectedValue = value;
  }
set WholeBudget(value: number) {
    this.wholeBudget = value;
  }
set MinProbabilityPerCombination(value: number) {
    this.minProbabilityPerCombination = value;
  }
set MinProfitPerCombination(value: number) {
    this.minProfitPerCombination = value;
  }
set MinSuccedDraw(value: number) {
    this.minSuccedDraw = value;
  }
  private ExpectedValueInUnits() {
    this.expectedValueInUnits =  (this.startingValue * this.expectedValue) / 100;
  }
constructor() {
  /* Subscribe Subject*/
  this.subjExpectedValueInUnits.subscribe({
    next: (x) => x = this.expectedValueInUnits,
    error: err => console.error('subjExpectedValueInUnits got an error: ' + err),
    complete: () => console.log('subjExpectedValueInUnits got a complete notification'),
  });
}
}

import { AngularFireDatabase } from 'angularfire2/database';
import { mockBettingForkData, BettingForkData } from './../Interfaces/bettingFork';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputationServiceService {

  private CurrentForkData: BettingForkData;
  dbItems: Observable<any>; // Observable<any[]>
  dbItemsValue: any[];
  dbItemObserver = {
    next: x => { this.dbItemsValue.push(x) }
  };
  /* Implements ForkInfoData */
  expectedValueInUnits: number;
  /* Create Subject */
  public subjExpectedValueInUnits = new Subject<number>(); // number
  /* Create Observables */
  obsExpectedValueInUnits = new Observable((observer) => {
    observer.next(this.expectedValueInUnits); // number
  });
  //#region  "Observers for create-betting-fork"
  obsStartingValue = {
    next: x => { this.setStartingValue = x; },
    error: err => console.error('obsStartingValue got an error: ' + err),
    complete: () => console.log('obsStartingValue got a complete notification'),
  };

  sendToDbStartingValue = {
    /* To Do */ 
    //next: x => {this.getStartingValue = },
    error: err => console.error('sendToDbStartingValue got an error: ' + err),
    complete: () => console.log('sendToDbStartingValue got a complete notification'),
  };
  obsExpectedValue = {
    next: x => { this.setExpectedValue = x; },
    error: err => console.error('obsExpectedValue got an error: ' + err),
    complete: () => console.log('obsExpectedValue got a complete notification'),
  };
  sendToDbExpectedValue = {
    /* To Do */ 
    // next: x => {this.getExpectedValue = },
    error: err => console.error('sendToDbStartingValue got an error: ' + err),
    complete: () => console.log('sendToDbStartingValue got a complete notification'),
  };
  obsWholeBudget = {
    next: x => { this.setWholeBudget = x; },
    error: err => console.error('obsWholeBudget got an error: ' + err),
    complete: () => console.log('obsWholeBudget got a complete notification'),
  };
  sendToDbWholeBudget = {
    /* To Do */ 
    // next: x => {this.getWholeBudget = },
    error: err => console.error('sendToDbStartingValue got an error: ' + err),
    complete: () => console.log('sendToDbStartingValue got a complete notification'),
  };
  //#endregion  "Observers for create-betting-fork"

  //#region  "Getters and Setters" 
  set setStartingValue(value: number) {
    this.CurrentForkData.startingValue = value;
  }
  set setExpectedValue(value: number) {
    this.CurrentForkData.expectedValue = value;
  }
  set setWholeBudget(value: number) {
    this.CurrentForkData.wholeBudget = value;
  }
  set setMinProbabilityPerCombination(value: number) {
    this.CurrentForkData.minProbabilityPerCombination = value;
  }
  set setMinProfitPerCombination(value: number) {
    this.CurrentForkData.minProfitPerCombination = value;
  }
  set setMinSuccedDraw(value: number) {
    this.CurrentForkData.minSuccedDraw = value;
  }
  get getStartingValue(): number{
    return this.CurrentForkData.startingValue;
  }
  get getExpectedValue(): number{
    return this.CurrentForkData.expectedValue;
  }
  get getWholeBudget(): number{
    return this.CurrentForkData.wholeBudget;
  }
  get getMinProbabilityPerCombination(): number{
    return this.CurrentForkData.minProbabilityPerCombination;
  }
  get getMinProfitPerCombination(): number{
    return this.CurrentForkData.minProfitPerCombination;
  }
  get getMinSuccedDraw(): number{
    return this.CurrentForkData.minSuccedDraw;
  }
  //#endregion "Getters and Setters"

  /* Private Methods */
  private ExpectedValueInUnits(): number {
    return this.expectedValueInUnits = (this.getStartingValue * this.getExpectedValue) / 100;
  }
  constructor(db: AngularFireDatabase
  ) {
    // Equvalent of subscribe method
    this.dbItems =  db.list('Forks').valueChanges();
    this.dbItems.subscribe(this.dbItemObserver);
    console.log('This is a list of items from Db: ' + this.dbItemsValue);
   }

    /*
    
    this.subjExpectedValueInUnits.subscribe({
      next: (x) => {
        this.ExpectedValueInUnits();
        x = this.expectedValueInUnits;
        console.log('Subscribe subject in value of: ' + x);
      },
      error: err => console.error('subjExpectedValueInUnits got an error: ' + err),
      complete: () => console.log('subjExpectedValueInUnits got a complete notification'),
    });
  }
  */
}


import { ComputationServiceService } from './../../computation-services/computation-service.service';
import { BettingForkData } from '../../Interfaces/bettingFork';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs';


@Component({
  selector: 'app-create-betting-fork',
  templateUrl: './create-betting-fork.component.html',
  styleUrls: ['./create-betting-fork.component.css']
})
export class CreateBettingForkComponent implements OnInit, OnDestroy {
  /*Class properties */
  mySubscription: any;

  constructor(private fb: FormBuilder,
              private computationService: ComputationServiceService,
              ){
              }

  /* Reactive form Data */
  bettingForm = this.fb.group({
    startingValue: [0, [
      Validators.required,
      Validators.min(1),
      Validators.max(100000)
    ]],
    expectedValue: [0, [
      Validators.required,
    ]],
    wholeBudget: [0, [
      Validators.max(1000000),
    ]],
    minProbabilityPerCombination: [0, [
      Validators.min(1),
      Validators.max(99)
    ]],
    minProfitPerCombination: [0, [
      Validators.min(1),
      Validators.max(99)
    ]],
    minSucceedDraw: [0, [
      Validators.min(1),
    ]]
  });

  /* Observables */
  objStartingValue = this.bettingForm.get('startingValue');
  objExpectedValue = this.bettingForm.controls['expectedValue'];
  objWholeBudget = this.bettingForm.controls['wholeBudget'];
  /* From Event Observables */
  // obsFromEventStartingValue = fromEvent(this.objStartingValue.valueChanges, 'onkeypress');

  /* Create Observables */
  /*
  obsStartingValue = new Observable((observer) => {
    observer.next(this.objStartingValue.valueChanges);
    console.log('Starting Value emmit new value ' + this.objStartingValue.valueChanges);
    return {
      unsubscribe() {
        console.log('Stop observe Starting Value');
      }
    };
  });
  */
  obsExpectedValue = new Observable((observer) => {
    observer.next(this.objStartingValue.value); // number
  });
  obsWholeBudget = new Observable((observer) => {
    observer.next(this.objStartingValue.value); // number
  });
  
  /* Subscriptions */

  ngOnInit() {
    this.objStartingValue.valueChanges.subscribe(this.computationService.obsStartingValue);
    this.objExpectedValue.valueChanges.subscribe(this.computationService.obsExpectedValue);
    this.objWholeBudget.valueChanges.subscribe(this.computationService.obsWholeBudget);
    // console.log('Type of objStartingValue: ' + typeof(this.objStartingValue));
    // console.log('Type of objExpectedValue: ' + typeof(this.objExpectedValue));
  }

  get startingValue() {
    return this.bettingForm.get('startingValue');
  }

  get expectedValue() {
    return this.bettingForm.get('expectedValue');
  }
  get wholeBudget() {
    return this.bettingForm.get('wholeBudget');
  }
  get minProbabilityPerCombination() {
    return this.bettingForm.get('expectedValue');
  }
  get minProfitPerCombination() {
    return this.bettingForm.get('minProfitPerCombination');
  }
  get minSucceedDraw() {
    return this.bettingForm.get('minSuccedDraw');
  }

  onSubmit() {
    
    // this.obsExpectedValue.subscribe(this.computationService.obsExpectedValue);
    // this.obsWholeBudget.subscribe(this.computationService.obsWholeBudget);
    // tslint:disable-next-line: no-unused-expression
    console.log('Comp StartValu ' + this.computationService.getStartingValue);
    console.log('Comp ExpVal ' + this.computationService.getExpectedValue);
    console.log(this.computationService.getWholeBudget);
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}

import { ComputationServiceService } from './../../computation-services/computation-service.service';
import { BettingForkData } from '../../Interfaces/bettingFork';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs';


@Component({
  selector: 'app-create-betting-fork',
  templateUrl: './create-betting-fork.component.html',
  styleUrls: ['./create-betting-fork.component.css']
})
export class CreateBettingForkComponent implements OnInit, OnDestroy, OnChanges {

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
  objExpectedValue = this.bettingForm.get('expectedValue');
  objWholeBudget = this.bettingForm.get('wholeBudget');

  ngOnInit() {
    /* Subscriptions when component init */
    this.objStartingValue.valueChanges.subscribe(this.computationService.obsStartingValue);
    this.objExpectedValue.valueChanges.subscribe(this.computationService.obsExpectedValue);
    this.objWholeBudget.valueChanges.subscribe(this.computationService.obsWholeBudget);
  }
  ngOnChanges(){
    /* Subscription when No focus on inputs */
    if (this.objStartingValue.untouched === true){
      this.objStartingValue.value.subscribe(this.computationService.sendToDbStartingValue);
    }
    if (this.objExpectedValue.untouched === true){
      this.objExpectedValue.value.subscribe(this.computationService.sendToDbExpectedValue);
    }
    if (this.objWholeBudget.untouched === true){
      this.objWholeBudget.value.subscribe(this.computationService.sendToDbWholeBudget);
    }
  }
  //#region "Getter and Setters"
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
  //#endregion "Getter and Setters"
  onSubmit() {
    /* To Do */
    // Add all data to Forks List
    console.log('Comp StartValu ' + this.computationService.getStartingValue);
    console.log('Comp ExpVal ' + this.computationService.getExpectedValue);
  }

  ngOnDestroy() {
    console.log('Cia create betting form ;)');
  }
}

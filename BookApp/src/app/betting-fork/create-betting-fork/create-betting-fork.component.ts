import { ExpectedValueService } from './../../computation-services/expected-value.service';
import { ComputationServicesModule } from './../../computation-services/computation-services.module';
import { BettingForkData } from '../../Interfaces/bettingFork';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-betting-fork',
  templateUrl: './create-betting-fork.component.html',
  styleUrls: ['./create-betting-fork.component.css']
})
export class CreateBettingForkComponent implements OnInit {

  /* Useful in template form type */
  // BettingForkData;

  /* Observables */
  
  /* Reactive form Data */
  constructor(private fb: FormBuilder,
              private expectedValue: ExpectedValueService) { }
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
  obsStartingValue = this.bettingForm.controls['startingValue'];
  this.obsStartingValue.this.service.function
    .subscribe(arg => this.property = arg);
  
  obsExpectedValue = this.bettingForm.controls['expectedValue'];
  obsWholeBudget = this.bettingForm.controls['wholeBudget'];
  ngOnInit() {
   
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
    // TODO: Use EventEmitter with form value
    console.warn(this.bettingForm.value);
  }

}


import { BettingForkData } from '../../Interfaces/bettingFork';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-betting-fork',
  templateUrl: './create-betting-fork.component.html',
  styleUrls: ['./create-betting-fork.component.css']
})
export class CreateBettingForkComponent implements OnInit {

  /* Useful in template form type */
  // BettingForkData;

  /* Reactive form Data */
  bettingForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.bettingForm = this.fb.group({
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

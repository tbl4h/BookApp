import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinProbabilityPerCombinationService {

  constructor() { }
  setMinProbabilityPerCombination(MinProbabilityPerCombination: number){
    return MinProbabilityPerCombination;
  }
}

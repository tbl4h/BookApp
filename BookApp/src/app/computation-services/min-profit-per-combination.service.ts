import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinProfitPerCombinationService {

  constructor() { }
  setMinProfitPerCombination(MinProfitPerCombination: number){
    return MinProfitPerCombination;
  }
}

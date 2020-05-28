import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WholeBudgetService {

  constructor() { }
  setWholeBudget(WholeBudget: number){
    return WholeBudget;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpectedValueService {

  constructor() { }
  setExpectedValue(ExpectedValue: number){
      return ExpectedValue;
  }
}

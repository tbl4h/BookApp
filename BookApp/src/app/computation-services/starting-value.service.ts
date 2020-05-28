import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartingValueService {
  constructor() { }
  setStartingValue(StartingValue: number) {
    return StartingValue;
  }
}

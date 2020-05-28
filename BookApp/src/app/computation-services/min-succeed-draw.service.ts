import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinSucceedDrawService {

  constructor() { }
  setMinSucceedDraw(MinSucceedDraw: number){
    return MinSucceedDraw;
  }
}

import { ForkInfoData } from './../../Interfaces/forkInfo';
import { Component, OnInit } from '@angular/core';
import { ComputationServiceService } from 'src/app/computation-services/computation-service.service';
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-fork-info',
  templateUrl: './fork-info.component.html',
  styleUrls: ['./fork-info.component.css']
})
export class ForkInfoComponent implements OnInit, ForkInfoData {

  constructor(private computationService: ComputationServiceService
  ) { }


  set ExpectedValueInUnits(value: number) { this.expectedValueInUnits = value; }

  /* Implements Fork Info Data */
  expectedValueInUnits: number;
  testVlaue = 100;
  /* Observers */

  /* Subscribe Subject */ 
  
  
  ngOnInit() {
    console.log('expectedValueInUnits ' + this.expectedValueInUnits);
    this.computationService.subjExpectedValueInUnits.next(this.expectedValueInUnits);
  }

}

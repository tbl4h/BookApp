import { BettingForkData } from './../MockFiles/bettingFork';
import { ComputationServicesModule } from './../computation-services/computation-services.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-betting-fork',
  templateUrl: './create-betting-fork.component.html',
  styleUrls: ['./create-betting-fork.component.css']
})
export class CreateBettingForkComponent implements OnInit {

  BettingForkData;

  constructor() { }

  ngOnInit(): void {
  }

}

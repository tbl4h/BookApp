import { Component, OnInit } from '@angular/core';
import { ControlInterface } from '../../Interfaces/controlInterface';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  control: ControlInterface;

  constructor() { }

  ngOnInit(): void {
  }

  onCLick(){
    /*  */
  }
}

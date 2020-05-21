import { ControlComponent } from './../control/control.component';
import { Component, OnInit } from '@angular/core';
import { ControlInterface } from '../../Interfaces/controlInterface';
import { LinkedList } from '@he11sing/collections';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  controlList: LinkedList<ControlInterface> ;

  constructor() { }

  ngOnInit(): void {
    
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {

  theData: Data[];
  get data(): Data[] {
    return this.theData;
  }
  @Input() set data(value: Data[]) {
    this.theData = value;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

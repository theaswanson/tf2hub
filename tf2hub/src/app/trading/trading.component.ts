import { Component, OnInit } from '@angular/core';
import { Data, DataService } from '../data.service';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss']
})
export class TradingComponent implements OnInit {

  data: Data[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getTrading();
  }

}

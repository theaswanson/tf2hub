import { Component, OnInit } from '@angular/core';
import { Data, DataService } from '../data.service';

@Component({
  selector: 'app-marketplaces',
  templateUrl: './marketplaces.component.html',
  styleUrls: ['./marketplaces.component.scss']
})
export class MarketplacesComponent implements OnInit {

  data: Data[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getMarketplaces();
  }

}

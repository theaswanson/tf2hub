import { Component, OnInit } from '@angular/core';
import { Data } from '../data.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-official-sites',
  templateUrl: './official-sites.component.html',
  styleUrls: ['./official-sites.component.scss']
})
export class OfficialSitesComponent implements OnInit {

  data: Data[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getOfficial();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Data, DataService } from '../data.service';

@Component({
  selector: 'app-competitive',
  templateUrl: './competitive.component.html',
  styleUrls: ['./competitive.component.scss']
})
export class CompetitiveComponent implements OnInit {

  data: Data[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getCompetitive();
  }

}

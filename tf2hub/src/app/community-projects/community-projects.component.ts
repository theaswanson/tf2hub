import { Component, OnInit } from '@angular/core';
import { Data, DataService } from '../data.service';

@Component({
  selector: 'app-community-projects',
  templateUrl: './community-projects.component.html',
  styleUrls: ['./community-projects.component.scss']
})
export class CommunityProjectsComponent implements OnInit {

  data: Data[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getProjects();
  }

}

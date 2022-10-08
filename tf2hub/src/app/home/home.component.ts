import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../models/Data';
import { Filter } from '../models/Filter';
import { Tag } from '../models/Tag';

export class TagFilter {
  text: string;
  value: Tag;
  selected: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tags: TagFilter[];
  data: Data[];
  selectedTag: TagFilter;
  searchText: string;

  constructor(private dataService: DataService) {
    this.tags = [
      { text: 'All', selected: true } as TagFilter,
      { text: 'Featured', value: Tag.Featured, selected: false } as TagFilter,
      { text: 'Official Sites', value: Tag.Official, selected: false } as TagFilter,
      { text: 'Community Servers', value: Tag.CommunityServers, selected: false } as TagFilter,
      { text: 'Communities', value: Tag.Communities, selected: false } as TagFilter,
      { text: 'Events', value: Tag.Events, selected: false } as TagFilter,
      { text: 'Enhancements', value: Tag.Enhancements, selected: false } as TagFilter,
      { text: 'Tools', value: Tag.Tools, selected: false } as TagFilter,
      { text: 'Mods', value: Tag.Mods, selected: false } as TagFilter,
      { text: 'Competitive', value: Tag.Competitive, selected: false } as TagFilter,
      { text: 'Trading', value: Tag.Trading, selected: false } as TagFilter,
      { text: 'Marketplaces', value: Tag.Marketplaces, selected: false } as TagFilter,
    ];
    this.selectedTag = this.tags[0];
    this.searchText = "";
  }

  ngOnInit(): void {
    this.getData();
  }

  selectTag(selectedTag: TagFilter): void {
    for (const tag of this.tags) {
      tag.selected = false;
    }
    selectedTag.selected = true;
    this.selectedTag = selectedTag;
    this.getData();
  }

  getData(): void {
    this.data = this.dataService.getData({
      tag: this.selectedTag.value,
      search: this.searchText
    } as Filter);
  }

  searchChanged(value: any): void {
    this.searchText = value;
    this.getData();
  }

}

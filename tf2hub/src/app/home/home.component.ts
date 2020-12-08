import { Component, OnInit } from '@angular/core';
import { Data, DataService } from '../data.service';
import { Tag } from '../models';

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

  tags: TagFilter[] = [
    { text: 'All', value: Tag.All, selected: true } as TagFilter,
    { text: 'Official Sites', value: Tag.Official, selected: false } as TagFilter,
    { text: 'Mods', value: Tag.Mods, selected: false } as TagFilter,
    { text: 'Enhancements', value: Tag.Enhancements, selected: false } as TagFilter,
    { text: 'Communities', value: Tag.Communities, selected: false } as TagFilter,
    { text: 'Trading', value: Tag.Trading, selected: false } as TagFilter,
    { text: 'Marketplaces', value: Tag.Marketplaces, selected: false } as TagFilter,
    { text: 'Competitive', value: Tag.Competitive, selected: false } as TagFilter,
  ];

  data: Data[];
  selectedTag: TagFilter;

  constructor(private dataService: DataService) {
    this.selectedTag = this.tags.find(x => x.value === Tag.All);
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
    this.data = this.dataService.getData(this.selectedTag.value);
  }

}

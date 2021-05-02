import { Injectable } from '@angular/core';
import { Tag } from './models';
import data from './data.json';

export class Data {
  title: string;
  subtitle: string;
  tag: Tag;
  description: string[];
  links: Link[];
  img?: Image;
}

export class Image {
  src: string;
}

export class Link {
  href: string;
  text: string;
}

export class Filter {
  tag: Tag;
  search: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Data[];

  constructor() {
    this.data = data;
  }

  getData(filter: Filter): Data[] {
    let filtered = this.data;
    filtered = this.filterByTag(filter.tag, filtered);
    filtered = this.filterBySearch(filter.search, filtered);
    return filtered;
  }

  private filterBySearch(search: string, filtered: Data[]) {
    if (search && search.trim().length > 0) {
      search = search.trim();
      filtered = filtered.filter(x => this.includes(x.title, search) || this.includes(x.description.join('.'), search));
    }
    return filtered;
  }

  private filterByTag(tag: Tag, filtered: Data[]) {
    if (tag) {
      filtered = filtered.filter(x => x.tag == tag);
    }
    return filtered;
  }

  includes(one: string, two: string): boolean {
    return one.toLowerCase().includes(two.toLowerCase());
  }
}

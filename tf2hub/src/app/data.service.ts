import { Injectable } from '@angular/core';
import { Tag } from './models';
import official from './data/official.json';
import communities from './data/communities.json';
import competitive from './data/competitive.json';
import enhancements from './data/enhancements.json';
import tools from './data/tools.json'
import mods from './data/mods.json';
import marketplaces from './data/marketplaces.json';
import trading from './data/trading.json';

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
    this.data = []
      .concat(official)
      .concat(communities)
      .concat(competitive)
      .concat(enhancements)
      .concat(tools)
      .concat(mods)
      .concat(marketplaces)
      .concat(trading);
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

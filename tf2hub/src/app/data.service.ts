import { Injectable } from '@angular/core';
import { Tag } from './models';
import official from './data/official.json';
import communities from './data/communities.json';
import competitive from './data/competitive.json';
import enhancements from './data/enhancements.json';
import mods from './data/mods.json';
import marketplaces from './data/marketplaces.json';
import trading from './data/trading.json';

export class Data {
  title: string;
  subtitle: string;
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

@Injectable({
  providedIn: 'root'
})
export class DataService {

  official: Data[] = official;
  communities: Data[] = communities;
  competitive: Data[] = competitive;
  enhancements: Data[] = enhancements;
  mods: Data[] = mods;
  marketplaces: Data[] = marketplaces;
  trading: Data[] = trading;

  constructor() { }

  getData(tag: Tag): Data[] {
    switch (tag) {
      case Tag.All:
        return []
          .concat(this.official)
          .concat(this.communities)
          .concat(this.competitive)
          .concat(this.enhancements)
          .concat(this.mods)
          .concat(this.marketplaces)
          .concat(this.trading);
      case Tag.Communities:
        return this.communities;
      case Tag.Competitive:
        return this.competitive;
      case Tag.Enhancements:
        return this.enhancements;
      case Tag.Mods:
        return this.mods;
      case Tag.Official:
        return this.official;
      case Tag.Trading:
        return this.trading;
      case Tag.Marketplaces:
        return this.marketplaces;
      default:
        throw new Error('Invalid tag.');
    }
  }
}

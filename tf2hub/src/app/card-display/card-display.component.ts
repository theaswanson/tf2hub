import { Component, Input, OnInit } from '@angular/core';
import { faDiscord, faFacebook, faGithub, faInstagram, faSteam, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faBook, faGlobe, faGlobeAmericas, faGlobeAsia, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { Data } from '../data.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {

  faGlobe = faGlobe;
  faGlobeAmericas = faGlobeAmericas;
  faGlobeEurope = faGlobeEurope;
  faGlobeAsia = faGlobeAsia;
  faYouTube = faYoutube;
  faDiscord = faDiscord;
  faTwitch = faTwitch;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faSteam = faSteam;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faBook = faBook;

  theData: Data[];
  get data(): Data[] {
    return this.theData;
  }
  @Input() set data(value: Data[]) {
    this.theData = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  getIcon(linkText: string): IconDefinition {
    switch (linkText) {
      case 'Website':
        return this.faGlobe;
      case 'Docs':
        return this.faBook;
      case 'Twitter':
        return this.faTwitter;
      case 'Twitch':
        return this.faTwitch;
      case 'YouTube':
        return this.faYouTube;
      case 'Discord':
        return this.faDiscord;
      case 'GitHub':
        return this.faGithub;
      case 'Steam Group':
        return this.faSteam;
      case 'Facebook':
        return this.faFacebook;
      case 'Instagram':
        return this.faInstagram;
      case 'NA Website':
        return this.faGlobeAmericas;
      case 'EU Website':
        return this.faGlobeEurope;
      case 'SEA Website':
        return this.faGlobeAsia;
      default:
        return this.faGlobe;
    }
  }
}

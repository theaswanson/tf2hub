import { Injectable } from '@angular/core';
import { Tag } from './models';

export class Data {
  title: string;
  subtitle: string;
  description: string[];
  links: Link[];
  img: Image;
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

  constructor() { }

  private communities = [
    {
      title: 'Creators.TF',
      subtitle: 'Community Servers',
      description: [
        `\"Welcome to Creators.TF, a TF2 community celebration project that takes the initiative to provide new content for Team Fortress 2.\"`,
        `\"Using the help of community content creators, we can provide complete community-created events to our own servers
         through modding and plugins. Hats, weapons, maps, and much more! All of these will be created by the community,
         and implemented into our servers.\"`
      ],
      links: [
        { href: 'https://creators.tf', text: 'Website' } as Link,
        { href: 'https://creators.tf/discord', text: 'Discord' } as Link,
        { href: 'https://twitter.com/creatorstf', text: 'Twitter' } as Link,
      ],
      img: { src: '../../assets/img/creators-halloween-2020.jpg' }
    } as Data,
    {
      title: 'Jump.tf',
      subtitle: 'Jumping Community',
      description: ['\"The TF2 Jumping community. Check it out.\"'],
      links: [{ href: 'https://jump.tf/', text: 'Visit' } as Link],
      img: { src: '../../assets/img/jumptf.jpg' }
    } as Data,
    {
      title: 'Jump Academy',
      subtitle: 'Jumping Community',
      description: [`\"We are a community of jumpers from all around the world
      who share the same passion for jumping in Team Fortress 2.\"`],
      links: [{ href: 'https://jumpacademy.tf/', text: 'Visit' } as Link],
      img: { src: '../../assets/img/jumpacademy.jpg' }
    } as Data,
    {
      title: 'Teamwork.tf',
      subtitle: 'Community Hub',
      description: [`\"Provides a platform and tools to bring the TF2 community together.
      Between 2015 and 2020 we ran a network to support TF2 YouTubers.
      During a short break we came back with focus on community servers and statistics.
      And after a successful Patreon campaign, teamwork.tf has now brought back the \'yellow pages for TF2\'.
      Beside that we now also have great community tools for map makers, to get insight in player behaviour of maps.\"`],
      links: [{ href: 'https://teamwork.tf/', text: 'Visit' } as Link],
      img: { src: '../../assets/img/teamworktf.png' }
    } as Data,
    {
      title: 'TF2Maps',
      subtitle: 'Map Creators',
      description: ['Mapping tutorials, contests, forums, and more!'],
      links: [
        { href: 'https://tf2maps.net/', text: 'Website' } as Link,
        { href: 'https://twitter.com/tf2maps', text: 'Twitter' } as Link,
        { href: 'http://steamcommunity.com/groups/TF2Mappers', text: 'Steam Group' } as Link,
        { href: 'https://discord.gg/wSYJN3r', text: 'Discord' } as Link,
      ],
      img: { src: '../../assets/img/tf2maps.jpg' }
    } as Data,
  ];
  private competitive = [
    {
      title: 'teamfortresstv',
      subtitle: 'Game Broadcaster, Competitive Community',
      description: ['\"The home of competitive Team Fortress 2.\"'],
      links: [
        { href: 'https://www.teamfortress.tv/', text: 'Website' } as Link,
        { href: 'https://twitter.com/teamfortresstv', text: 'Twitter' } as Link,
        { href: 'https://discord.gg/0if53iRT2W4nyL6t', text: 'Discord' } as Link,
        { href: 'http://youtube.com/user/teamfortresstv', text: 'YouTube' } as Link,
        { href: 'http://twitch.tv/teamfortresstv', text: 'Twitch' } as Link,
      ],
      img: { src: '../../assets/img/teamfortresstv.jpg' }
    } as Data,
    {
      title: 'comp.tf',
      subtitle: 'Informational',
      description: [`\"comp.tf is the Competitive TF2 Wiki. We aim to provide the community with a free,
      neutral and comprehensive summary of current and historical competitive TF2 knowledge.
      Players, teams, tournaments, maps and classes pages are our most popular forms of content.\"`],
      links: [
        { href: 'https://comp.tf/', text: 'Website' } as Link,
        { href: 'https://twitter.com/comptfwiki', text: 'Twitter' } as Link,
        { href: 'https://discord.gg/VvRZp7e', text: 'Discord' } as Link,
      ],
      img: { src: '../../assets/img/comptf.jpg' }
    } as Data,
    {
      title: 'TF2 Center',
      subtitle: 'Pick-up Games',
      description: [`\"TF2Center was created to help bridge the gap between public and competitive play for TF2.
      TF2Center is a place to play TF2 games based on specific competitive game-modes like 6v6 and Highlander.
      Newer players can take advantage of our lobby system to create games without needing to get a server personally,
      whilst more experienced players can ensure games are competitive by imposing restrictions.\"`],
      links: [
        { href: 'https://tf2center.com/', text: 'Website' } as Link,
        { href: 'https://steamcommunity.com/groups/tf2-center', text: 'Steam Group' } as Link,
      ],
      img: { src: '../../assets/img/tf2center.jpg' }
    } as Data,
    {
      title: 'serveme.tf',
      subtitle: 'Server Hosting',
      description: ['\"The easiest way to get a TF2 server.\"'],
      links: [
        { href: 'https://serveme.tf/', text: 'EU Website' } as Link,
        { href: 'https://na.serveme.tf/', text: 'NA Website' } as Link,
        { href: 'https://sea.serveme.tf/', text: 'SEA Website' } as Link,
        { href: 'https://discord.gg/0s38RdItLiCmARMm', text: 'Discord' } as Link,
        { href: 'https://twitter.com/servemetf', text: 'Twitter' } as Link,
        { href: 'https://github.com/Arie/serveme', text: 'GitHub' } as Link,
      ],
      img: { src: '../../assets/img/servemetf.png' }
    } as Data,
    {
      title: 'RGL',
      subtitle: 'TF2 League (North America)',
      description: ['\"RGL.gg is the largest NA TF2 league. Focused on evolving, growing and pushing the TF2 competitive community forward.\"'],
      links: [
        { href: 'https://rgl.gg/', text: 'Website' } as Link,
        { href: 'https://twitch.tv/RGLgg', text: 'Twitch' } as Link,
        { href: 'https://youtube.com/c/RGLgg', text: 'YouTube' } as Link,
        { href: 'https://twitter.com/RGL_gg', text: 'Twitter' } as Link,
        { href: 'https://rgl.gg/PUGs', text: 'Discord' } as Link,
        { href: 'https://steamcommunity.com/groups/RGLgg', text: 'Steam Group' } as Link,
      ],
      img: { src: '../../assets/img/rgl.png' }
    } as Data,
    {
      title: 'ETF2L',
      subtitle: 'TF2 League (European Union)',
      description: ['\"The European Team Fortress 2 League.\"'],
      links: [
        { href: 'https://etf2l.org/', text: 'Website' } as Link,
        { href: 'https://twitter.com/ETF2L', text: 'Twitter' } as Link,
        { href: 'https://facebook.com/etf2l', text: 'Facebook' } as Link,
        { href: 'https://steamcommunity.com/groups/etf2l', text: 'Steam Group' } as Link,
      ],
      img: { src: '../../assets/img/etf2l.png' }
    } as Data,
    {
      title: 'UGC',
      subtitle: 'TF2 League',
      description: ['Leagues for Highlander, 6v6, 4v4, and Ultiduo.'],
      links: [
        { href: 'https://ugcleague.com/index.cfm', text: 'Website' } as Link,
        { href: 'https://twitch.tv/ugcleague', text: 'Twitch' } as Link,
        { href: 'https://facebook.com/UnitedGamingClans', text: 'Facebook' } as Link,
        { href: 'https://twitter.com/ugcleague', text: 'Twitter' } as Link,
        { href: 'https://youtube.com/user/UGCLeagueTF2/videos', text: 'YouTube' } as Link,
      ],
      img: { src: '../../assets/img/ugc.png' }
    } as Data,
    {
      title: 'EssentialsTF',
      subtitle: 'Game Broadcaster',
      description: [
        '\"Broadcasting the best from the top Team Fortress 2 events.\"',
        `\"For over 4 years we have powered and produced the largest events in Team Fortress 2.
        In 2015, starting as a production partner of TeamFortress.TV, we provided hardware that powered the broadcast of
        Multiplay’s Insomnia55 TF2 tournament to fans around the world.
        Since then we have expanded to organising our own online competitive TF2 events with sponsored prize pools
        and becoming the primary production organisation for the TF2 tournament at GAME’s Insomnia Gaming Festival events
        working alongside Player1 Events for the past 3 years running.\"`
      ],
      links: [
        { href: 'https://essentials.tf/', text: 'Website' } as Link,
        { href: 'https://twitch.tv/essentialstf', text: 'Twitch' } as Link,
        { href: 'https://www.youtube.com/essentialstf', text: 'YouTube' } as Link,
        { href: 'https://discord.gg/hyQrEjw', text: 'Discord' } as Link,
        { href: 'https://twitter.com/tf2essentials', text: 'Twitter' } as Link,
        { href: 'https://instagram.com/essentialstf', text: 'Instagram' } as Link,
        { href: 'https://www.facebook.com/essentialstf/', text: 'Facebook' } as Link,
      ],
      img: { src: '../../assets/img/essentialstf.png' }
    } as Data,
  ];
  private enhancements = [
    {
      title: 'mastercomfig',
      subtitle: 'Game Configuration',
      description: ['\"A modern Team Fortress 2 performance and customization config.\"'],
      links: [
        { href: 'https://mastercomfig.com/', text: 'Website' } as Link,
        { href: 'https://docs.mastercomfig.com/', text: 'Docs' } as Link,
        { href: 'https://discord.gg/CuPb2zV', text: 'Discord' } as Link,
        { href: 'https://steamcommunity.com/groups/comfig', text: 'Steam Group' } as Link,
      ],
      img: { src: '../../assets/img/mastercomfig.png' }
    } as Data,
    {
      title: 'Huds.tf',
      subtitle: 'Custom HUDs and Hitsounds',
      description: ['\"Your online database for Team Fortress 2 HUDs.\"'],
      links: [
        { href: 'https://huds.tf/', text: 'Website' } as Link,
        { href: 'http://discord.huds.tf/', text: 'Discord' } as Link,
        { href: 'https://twitter.com/hudstf', text: 'Twitter' } as Link,
      ],
      img: { src: '../../assets/img/hudstf.jpg' }
    } as Data,
  ];
  private marketplaces = [
    {
      title: 'Marketplace.tf',
      subtitle: 'marketplace.tf',
      description: ['\"Securely buy and sell TF2 and Dota 2 items.\"'],
      links: [
        { href: 'https://marketplace.tf/', text: 'Website' } as Link,
      ],
      img: { src: '../../assets/img/marketplace.png' }
    } as Data,
    {
      title: 'Mannco Trade',
      subtitle: 'mannco.trade',
      description: [`\"We are an automated TF2 trading website, which allows you to get your desired items quick and easy.
      Mannco.trade was created back in September the 2017th and has been growing faster than expected ever since.
      This site is exclusive as it is because you’re able to trade items from different qualities,
      types and classes with each other, without needing to pay in Metals or Keys.
      Almost every item in the Team Fortress 2 Trading Community is being accepted by the Bots.\"`],
      links: [
        { href: 'https://mannco.trade/', text: 'Website' } as Link,
      ],
      img: { src: '../../assets/img/manncotrade.jpg' }
    } as Data,
  ];
  private mods = [
    {
      title: 'TF2 Classic',
      subtitle: 'Game Mod',
      description: [`\"A Team Fortress 2 mod aiming to re-imagine the 2008-2009 era,
      while also updating and adding new content. Developed by @EminomaTeam\"`],
      links: [
        { href: 'https://tf2classic.com/', text: 'Website' } as Link,
        { href: 'https://discord.gg/3zMk4vn', text: 'Discord' } as Link,
        { href: 'https://twitter.com/tf2classic', text: 'Twitter' } as Link,
      ],
      img: { src: '../../assets/img/tf2classic.png' }
    } as Data,
    {
      title: 'Open Fortress',
      subtitle: 'Game Mod',
      description: [`\"Open Fortress is a free and open-source passion project,
      lovingly crafted by nearly a hundred members of the Team Fortress community with an ideal of fun gameplay
      as well as maximum customizability.\"`],
      links: [
        { href: 'https://openfortress.fun/', text: 'Website' } as Link,
        { href: 'https://discord.gg/Jk3NUb7', text: 'Discord' } as Link,
        { href: 'https://www.youtube.com/channel/UCtqmIR--kRAAGRdJ-LtEu1A/videos', text: 'YouTube' } as Link,
        { href: 'https://twitter.com/openfortress', text: 'Twitter' } as Link,
        { href: 'https://github.com/KaydemonLP/Open-Fortress-Content-Source', text: 'GitHub' } as Link,
      ],
      img: { src: '../../assets/img/openfortress.jpg' }
    } as Data,
    {
      title: 'Pre-Fortress 2',
      subtitle: 'Game Mod',
      description: ['\"A recreation mod, containing many elements from the beta and late alpha of TF2.\"'],
      links: [
        { href: 'https://t.co/ML25OsQfVL?amp=1', text: 'Discord' } as Link,
        { href: 'https://twitter.com/prefortress2', text: 'Twitter' } as Link,
      ],
      img: { src: '../../assets/img/prefortress2.jpg' }
    } as Data,
    {
      title: 'Team Comtress 2',
      subtitle: 'Game Mod',
      description: [
        `\"Team Comtress 2 is a set of modifications on top of an older version of Team Fortress 2,
        with a community development team fixing bugs, improving performance, and adding quality of life features,
        with the goal of having those changes pulled upstream by Valve to the modern game.\"`,
        `\"TC2 is not an alternative, more stable game experience.
        TC2 is based on the 2017 TF2 source code leak, which contained an in-development version of Jungle Inferno.
        This build is rife with issues and incomplete features, and is not compatible with the modern game client.\"`
      ],
      links: [
        { href: 'https://github.com/mastercomfig/team-comtress-2', text: 'GitHub' } as Link,
      ],
    } as Data,
  ];
  private official = [
    {
      title: 'Official Website',
      subtitle: 'teamfortress.com',
      description: ['The official website for Team Fortress 2.'],
      links: [
        { href: 'https://www.teamfortress.com/', text: 'Visit' } as Link,
      ],
      img: { src: '../../assets/img/teamfortress.com.png' }
    } as Data,
    {
      title: 'Official Wiki',
      subtitle: 'wiki.teamfortress.com',
      description: ['\"The official resource for the Team Fortress series.\"'],
      links: [
        { href: 'https://wiki.teamfortress.com/', text: 'Visit' } as Link,
      ],
      img: { src: '../../assets/img/wiki.png' }
    } as Data,
    {
      title: 'Official Twitter',
      subtitle: 'twitter.com/TeamFortress',
      description: ['Official Twitter account of the Team Fortress team.'],
      links: [
        { href: 'https://twitter.com/TeamFortress', text: 'Visit' } as Link,
      ],
      img: { src: '../../assets/img/twitter.jpg' }
    } as Data,
  ];
  private trading = [
    {
      title: 'backpack.tf',
      subtitle: 'backpack.tf',
      description: ['Item trading, price tracking, backpack viewing, and more!'],
      links: [
        { href: 'https://backpack.tf/', text: 'Visit' } as Link,
      ],
      img: { src: '../../assets/img/backpack.jpg' }
    } as Data,
    {
      title: 'Trade.tf',
      subtitle: 'trade.tf',
      description: [`\"Trade.tf is a website to search all trading websites at once
      with the ability to estimate how much profit can be made from the trades.\"`],
      links: [
        { href: 'https://trade.tf/', text: 'Visit' } as Link,
      ],
      img: { src: '../../assets/img/trade-logo.png' }
    } as Data,
    {
      title: 'Scrap.tf',
      subtitle: 'scrap.tf',
      description: [`\"We are an automated trading website that helps everyone in Team Fortress 2 get items they want fast and easy.
      Scrap.TF was created back in August of 2012 and has grown very much over the past years.
      Since then we\'ve expanded from simply scrap banking to offering numerous services for players of many games.\"`],
      links: [
        { href: 'https://scrap.tf/', text: 'Visit' } as Link,
      ],
      img: { src: '../../assets/img/scrap.png' }
    } as Data,
    {
      title: 'Quicksell.store',
      subtitle: 'quicksell.store',
      description: [`\"Quicksell.store is a Team Fortress 2 trading site whose main purpose and drive is to help you have the best
      possible experience when buying and selling all kinds of items. Be it australiums, painted items or unusual
      hats, you never know what we might have in stock!

      With thousands of items and unusuals available we are prepared for any type of trade, no matter how big. Our
      competitive prices, efficient service and innovative mechanics make us a great choice to become your next home
      for anything trading related.

      The site has been trading since 2019.\"`],
      links: [
        { href: 'https://quicksell.store/', text: 'Visit' } as Link,
      ],
      img: { src: '../../assets/img/quicksellstore.png' }
    } as Data,
    {
      title: 'Team Fortress 2 Mart',
      subtitle: 'tf2mart.net',
      description: [`\"Our fast automatic trading service will help you to exchange TF2 items you have for items you need. We have
      huge selection of items from cheapest crates to unusual accessories.\"`],
      links: [
        { href: 'https://tf2mart.net/', text: 'Visit' } as Link,
      ],
      img: { src: '../../assets/img/tf2mart.png' }
    } as Data,
  ];

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

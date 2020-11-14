import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { OfficialSitesComponent } from './official-sites/official-sites.component';
import { CommunitiesComponent } from './communities/communities.component';
import { MarketplacesComponent } from './marketplaces/marketplaces.component';
import { CommunityProjectsComponent } from './community-projects/community-projects.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { TradingComponent } from './trading/trading.component';
import { CompetitiveComponent } from './competitive/competitive.component';

const ROUTES = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'official-sites', component: OfficialSitesComponent },
  { path: 'communities', component: CommunitiesComponent },
  { path: 'marketplaces', component: MarketplacesComponent },
  { path: 'projects', component: CommunityProjectsComponent },
  { path: 'trading', component: TradingComponent },
  { path: 'competitive', component: CompetitiveComponent },
] as Routes;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    OfficialSitesComponent,
    CommunitiesComponent,
    MarketplacesComponent,
    CommunityProjectsComponent,
    FooterComponent,
    TradingComponent,
    CompetitiveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

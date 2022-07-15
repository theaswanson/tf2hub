import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { CardDisplayComponent } from './card-display/card-display.component';
import { MaterialModule } from './material.module';
import { TrashcanComponent } from './trashcan/trashcan.component';
import { CleanTf2Component } from './clean-tf2/clean-tf2.component';

const ROUTES = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cleantf2', component: CleanTf2Component, pathMatch: 'full' },
  { path: 'trashcan', component: TrashcanComponent, pathMatch: 'full' },
] as Routes;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    CardDisplayComponent,
    TrashcanComponent,
    CleanTf2Component
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

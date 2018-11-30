import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { CommentStmt } from '@angular/compiler';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialDesignModule} from '../angular-material-design/angular-material-design.module';

// routing
import {AppRoutes} from './app.routes';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent,
    HomeComponent,
    CoursesComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialDesignModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

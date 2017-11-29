import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http' ;
import { CommonModule } from '@angular/common' ;

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
//.ts ommitted
import { ServerComponent} from './server/server.component';
import { BluecoloredDirective } from './bluecolored.directive';
import {MovieListService} from './services/movie-list/movie-list.service';

@NgModule({
  
  declarations: [
    AppComponent,
    ServerComponent,
    MycompComponent,
    BluecoloredDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

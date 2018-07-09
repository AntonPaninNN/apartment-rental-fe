import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { SearchComponent } from './search.component';
import { ItemComponent } from './item.component'; 
import { RoutingModule } from './routing.module';
import { ScrollTrackerDirective } from './scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    ItemComponent,
    ScrollTrackerDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

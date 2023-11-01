import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { paiModule } from './pai/pai.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   paiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoEchartComponent } from './com/demo-echart/demo-echart.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoEchartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

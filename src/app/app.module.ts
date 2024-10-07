import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { TaahhutComponent } from './taahhut/taahhut.component';
import { TaahhutAndTesellumStackedChartComponent } from './taahhut-and-tesellum-stacked-chart/taahhut-and-tesellum-stacked-chart.component';
import { FabrikaTaahhutlerComponent } from './fabrika-taahhutler/fabrika-taahhutler.component';
import { StackedOlmadanTaahhutTesellumComponent } from './stacked-olmadan-taahhut-tesellum/stacked-olmadan-taahhut-tesellum.component';

@NgModule({
  declarations: [
    AppComponent,
    TaahhutComponent,
    TaahhutAndTesellumStackedChartComponent,
    FabrikaTaahhutlerComponent,
    StackedOlmadanTaahhutTesellumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

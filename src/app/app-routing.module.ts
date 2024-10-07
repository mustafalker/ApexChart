import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaahhutComponent } from './taahhut/taahhut.component';
import { TaahhutAndTesellumStackedChartComponent } from './taahhut-and-tesellum-stacked-chart/taahhut-and-tesellum-stacked-chart.component';
import { FabrikaTaahhutlerComponent } from './fabrika-taahhutler/fabrika-taahhutler.component';
import { StackedOlmadanTaahhutTesellumComponent } from './stacked-olmadan-taahhut-tesellum/stacked-olmadan-taahhut-tesellum.component';
import { LineChartExampleComponent } from './line-chart-example/line-chart-example.component';
import { SimpleDonutExampleComponent } from './simple-donut-example/simple-donut-example.component';


const routes: Routes = [
  {path: 'taahhut',component: TaahhutComponent},
  {path: 'taahhut-tesellum' , component: TaahhutAndTesellumStackedChartComponent},
  {path: 'fabrikalar-tesellumler' , component: FabrikaTaahhutlerComponent},
  {path: 'stackedolmayan', component:StackedOlmadanTaahhutTesellumComponent},
  {path: 'linechartexample', component:LineChartExampleComponent},
  {path: 'simpledonutexample', component:SimpleDonutExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}

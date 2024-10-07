import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaahhutComponent } from './taahhut/taahhut.component';
import { TaahhutAndTesellumStackedChartComponent } from './taahhut-and-tesellum-stacked-chart/taahhut-and-tesellum-stacked-chart.component';
import { FabrikaTaahhutlerComponent } from './fabrika-taahhutler/fabrika-taahhutler.component';
import { StackedOlmadanTaahhutTesellumComponent } from './stacked-olmadan-taahhut-tesellum/stacked-olmadan-taahhut-tesellum.component';


const routes: Routes = [
  {path: 'taahhut',component: TaahhutComponent},
  {path: 'taahhut-tesellum' , component: TaahhutAndTesellumStackedChartComponent},
  {path: 'fabrikalar-tesellumler' , component: FabrikaTaahhutlerComponent},
  {path: 'stackedolmayan', component:StackedOlmadanTaahhutTesellumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}

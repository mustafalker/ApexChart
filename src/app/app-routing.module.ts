import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaahhutComponent } from './taahhut/taahhut.component';


const routes: Routes = [
  {path: 'taahhut',component: TaahhutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
 }

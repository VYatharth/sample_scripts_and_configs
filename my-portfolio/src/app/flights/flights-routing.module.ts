import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

const routes: Routes = [
  {
    path: 'flights-search',
    component: FlightsSearchComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './containers/bar/bar.component';
import { PieComponent } from './containers/pie/pie.component';
import { CandleStickComponent } from './containers/candle-stick/candle-stick.component';

const routes: Routes = [
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: 'pie',
    component: PieComponent
  },
  {
    path: 'candle-stick',
    component: CandleStickComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizationRoutingModule { }

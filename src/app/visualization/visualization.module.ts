import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VisualizationRoutingModule } from './visualization-routing.module';
import { BarComponent } from './containers/bar/bar.component';
import { PieComponent } from './containers/pie/pie.component';
import { VisualizationApiService } from './common/api/visualization-api.service';
import { VisualizationFacade } from './visualization.facade';
import { CandleStickComponent } from './containers/candle-stick/candle-stick.component';

@NgModule({
  declarations: [
    BarComponent,
    PieComponent,
    CandleStickComponent
  ],
  imports: [
    CommonModule,
    VisualizationRoutingModule,
    HttpClientModule
  ],
  providers: [VisualizationApiService, VisualizationFacade]
})
export class VisualizationModule { }

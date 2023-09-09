import { Injectable } from "@angular/core";
import { VisualizationApiService } from "../../common/api/visualization-api.service";
import { BaseFacade } from "../../common/services/base.facade";

@Injectable()
export class CandleStickFacade extends BaseFacade {
  
  
  constructor(private visualizationApi: VisualizationApiService) {
    super()
  }
  
  override loadData(): void {
    this.visualizationApi.getCandleStickData().subscribe(data => {
      this.addData(data)
    })
  }
  
  
}
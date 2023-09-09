import { Injectable } from "@angular/core";
import { VisualizationApiService } from "../../common/api/visualization-api.service";
import { IBar } from "../../common/interfaces/bar.interface";
import { BaseFacade } from "../../common/services/base.facade";

@Injectable()
export class BarFacade extends BaseFacade<IBar> {
  
  constructor(private apiService: VisualizationApiService) {
    super()
  }
  
  loadData(): void {
    this.apiService.getBarData().subscribe((data) => {
      this.addData(data)
    })
  }
  
}
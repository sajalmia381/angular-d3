import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as endpoints from './visualization.endpoints';


@Injectable()
export class VisualizationApiService {

  constructor(private http: HttpClient) { }
  
  getPieData(): Observable<any> {
    return this.http.get(endpoints.PIE_ENDPOINT)
  }
  
  getBarData(): Observable<any> {
    return this.http.get(endpoints.BAR_ENDPOINT)
  }
  
  getCandleStickData(): Observable<any> {
    return this.http.get(endpoints.CANDLE_STICK_ENDPOINT)
  }
}

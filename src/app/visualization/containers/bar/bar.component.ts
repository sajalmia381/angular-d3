import { Component, OnInit } from '@angular/core';
import { BarFacade } from './bar.facade';
import { Observable } from 'rxjs';
import { IBar } from '../../common/interfaces/bar.interface';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  providers: [BarFacade]
})
export class BarComponent implements OnInit {
  data$!: Observable<IBar[]>;
  
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  
  constructor(private _barFacade: BarFacade) {
    this.data$ = _barFacade.data$;
  }
  
  ngOnInit(): void {
    this._barFacade.loadData();
    this.createSvg();
    
    this.data$.subscribe((data) => {
      console.log('data', data)
      this.drawBars(data);
    })
  }
  
  private createSvg(): void {
    this.svg = d3.select("figure#id_bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }
  
  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.framework))
    .padding(0.2);
  
    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  
    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 200000])
    .range([this.height, 0]);
  
    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));
  
    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d: any) => x(d.framework))
    .attr("y", (d: any) => y(d.stars))
    .attr("width", x.bandwidth())
    .attr("height", (d: any) => this.height - y(d.stars))
    .attr("fill", "#d04a35");
  }
}

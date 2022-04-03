import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})

export class BarrasComponent{

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    // scales: {
    //   x: {},
    //   y: {
    //     min: 10
    //   }
    // },
    // plugins: {
    //   legend: {
    //     display: true,
    //   },
    //   datalabels: {
    //     anchor: 'end',
    //     align: 'end'
    //   }
    // }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#52BE80', hoverBackgroundColor:'red' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#BFC9CA', hoverBackgroundColor: 'red' },
      { data: [55, 37, 69, 25, 12, 52, 61], label: 'Series C', backgroundColor: '#EC7063', hoverBackgroundColor: 'red' }
    ],
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      28,
      48,
      Math.round(Math.random() * 100),
      86,
      Math.round(Math.random() * 100),
      90];

    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      55,
      37,
      69,
      Math.round(Math.random() * 100),
      25,
      Math.round(Math.random() * 100),
      12];

    this.chart?.update();
  }

}

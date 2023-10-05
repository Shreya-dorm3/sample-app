import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions } from "ng-apexcharts";
import { DashbboardService } from '../dashbboard.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public barChartTraffic: any;
  @ViewChild("chart") chart!: ChartComponent;

  constructor(private service: DashbboardService) { }

  ngOnInit(): void {
  }

  getBarChartTrafficByOrg() {
    this.service.fetchTrafficByOrg().subscribe({
      next: res => {
        this.barChartTraffic = res;
      }
    })
  }

}

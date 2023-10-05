import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexTitleSubtitle, ApexStroke, ApexGrid, ApexLegend, ApexMarkers, ApexTheme } from "ng-apexcharts";
import { DashbboardService } from '../dashbboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  grid: ApexGrid;
  legend: ApexLegend;
  theme: ApexTheme;
};
export interface TableData {
  organization: string;
  activeSources: number;
  events: number;
  threats: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public barChartTraffic: any;
  public barChartLog: any;
  public sourceLog: any;
  public overallTraffic: any;
  public dummyStats: any;
  public heatMapData: any;
  @ViewChild("chart") chart!: ChartComponent;
  dataSource: MatTableDataSource<TableData> = new MatTableDataSource();
  displayedColumns: string[] = ['organization', 'activeSources', 'events', 'threats'];
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort
  }

  constructor(private service: DashbboardService) { }

  ngOnInit(): void {
    this.heatMapData = {
      series: [
        {
          name: "Suspicious",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Custom",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 150,
        type: "heatmap",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#b92b27"],
      title: {
        text: "Threat Category Statistics"
      },
      grid: {
        show: false
      },
      xaxis: {
        labels: {
          show: false
        }
      }
    };
    this.getSourceLog();
    this.getBarChartTrafficByOrg();
    this.getTraficByLog();
    this.getOrganizationStatistics();
    this.getOverallStatus();
    this.getDummyStats();
  }

  getDummyStats() {
    this.service.fetchDummyStats().subscribe({
      next: res => {
        this.dummyStats = res;
      }
    });
  }

  getOverallStatus() {
    this.service.fetchOverallTraffic().subscribe({
      next: res => {
        this.overallTraffic = res;
      }
    });
  }

  getSourceLog() {
    this.service.fetchBySourceType().subscribe({
      next: res => {
        this.sourceLog = res;
      }
    });
  }

  getBarChartTrafficByOrg() {
    this.service.fetchTrafficByOrg().subscribe({
      next: res => {
        this.barChartTraffic = res;
      }
    });
  }

  getTraficByLog() {
    this.service.fetchTrafficByLog().subscribe({
      next: res => {
        this.barChartLog = res;
      }
    });
  }

  getOrganizationStatistics() {
    this.service.fetchOrganizationStatistics().subscribe({
      next: res => {
        this.dataSource.data = res.data;
      }
    });
  }

  generateData(count: number, yrange: { min: number; max: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

}

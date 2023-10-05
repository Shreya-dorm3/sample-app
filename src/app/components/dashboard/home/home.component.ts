import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexTitleSubtitle, ApexStroke, ApexGrid, ApexLegend, ApexMarkers, ApexTheme } from "ng-apexcharts";
import { DashbboardService } from '../dashbboard.service';
import { MatTableDataSource } from '@angular/material/table';

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

/**
 * This component use ng-apexcharts for the creation of different types of charts on the dashboard
 * The graphs shown on dashboards are- line, bar, heatmap, multiple line graphs
 */
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

  constructor(private service: DashbboardService) { }

  /**
   * The functions called at onInit are all used to initialize data for multiple graphs on the screen.
   * These are called only once, as the data is static for now
   */

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

  /**
   * @param count 
   * @param yrange 
   * @returns the random array value for heatmap, for dummy data presentation
   */

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

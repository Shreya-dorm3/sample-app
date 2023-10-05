import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashbboardService {

  constructor(private http: HttpClient) { }

  fetchDummyStats() {
    return of({
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 270, 540, 580, 690, 50, 460, 100, 0, 0, 0],
          color: "#d5efff"
        }
      ],
      chart: {
        type: "bar",
        height: 80,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          vertical: true
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      xaxis: {
        categories: [
          "vfsd",
          "sfv",
          "sd",
          "sdf",
          "dvf",
          "sd",
          "ds",
          "s ",
          "s",
          "q"
        ],
        labels: {
          show: false
        }
      }
    })
  }

  fetchOverallTraffic() {
    return of({
      "series": [
        {
          "name": "Desktops",
          "data": [
            10,
            41,
            35,
            51,
            49,
            62,
            69,
            91,
            148
          ],
          "color": "#56B79E"
        }
      ],
      "chart": {
        "height": 330,
        "type": "line",
        "zoom": {
          "enabled": false
        }
      },
      "dataLabels": {
        "enabled": false
      },
      "stroke": {
        "curve": "straight"
      },
      "title": {
        "text": "Overall Traffic Statistics",
        "align": "left"
      },
      "grid": {
        "row": {
          "colors": [
            "transparent"
          ],
          "opacity": 0.5
        },
        "borderColor": "#f1f1f1",
      },
      "xaxis": {
        "categories": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    })
    this.http.get<any>(`apiURL`);
  }

  fetchBySourceType() {
    return of({
      "series": [
        {
          "name": "Session Duration",
          "data": [
            45,
            52,
            38,
            24,
            33,
            26,
            21,
            20,
            6,
            8,
            15,
            10
          ]
        },
        {
          "name": "Page Views",
          "data": [
            35,
            41,
            62,
            42,
            13,
            18,
            29,
            37,
            36,
            51,
            32,
            35
          ]
        },
        {
          "name": "Total Visits",
          "data": [
            87,
            57,
            74,
            99,
            75,
            38,
            62,
            47,
            82,
            56,
            45,
            47
          ]
        },
        {
          "name": "Operating Systems",
          "data": []
        },
        {
          "name": "Firewall",
          "data": []
        }
      ],
      "chart": {
        "height": 330,
        "type": "line"
      },
      "dataLabels": {
        "enabled": false
      },
      "theme": {
        "mode": "light"
      },
      "stroke": {
        "width": 5,
        "curve": "straight",
        "dashArray": [
          0,
          3,
          5
        ]
      },
      "animations": {
        "enabled": "true",
        "easing": "easeinout"
      },
      "title": {
        "text": "Traffic by Source Type",
        "align": "left"
      },
      "markers": {
        "size": 0,
        "hover": {
          "sizeOffset": 6
        }
      },
      "xaxis": {
        "labels": {
          "trim": false,
          "show": false
        },
        "categories": [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan"
        ]
      },
      "grid": {
        "borderColor": "#f1f1f1",
        "row": {
          "colors": [
            "transparent"
          ],
          "opacity": 0.5
        }
      }
    })
    this.http.get<any>(`apiURL`);
  }

  fetchTrafficByOrg() {
    return of<any>({
      series: [
        {
          name: "basic",
          data: [400, 1100, 1200, 100],
          color: "#56B79E"
        }
      ],
      chart: {
        type: "bar",
        height: 330
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      title: {
        text: "Traffic By Organization",
        align: "left"
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Endpoint Security",
          "Network Security",
          "Cloud Security",
          "Application Security"
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    });
    this.http.get<any>(`apiURL`);
  }

  fetchTrafficByLog() {
    return of<any>({
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 300, 540, 580, 1100, 1200, 100],
          color: "#56B79E"
        }
      ],
      chart: {
        type: "bar",
        height: 330
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      title: {
        text: "Traffic By Recognized Log Sources"
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Endpoint Security",
          "Network Security",
          "Cloud Security",
          "Application Security",
          "Identity and Access Management",
          "Mobile Security",
          "Data Security",
          "Threat Intelligence",
          "Incident Response"
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    });
    this.http.get<any>(`apiURL`);
  }

  fetchOrganizationStatistics() {
    return of({
      "data": [
        {
          "organization": "CyberTech Inc.",
          "activeSources": 5,
          "events": 120,
          "threats": 12
        },
        {
          "organization": "SecureNow LLC",
          "activeSources": 8,
          "events": 200,
          "threats": 15
        },
        {
          "organization": "NetGuard Solutions",
          "activeSources": 7,
          "events": 150,
          "threats": 8
        },
        {
          "organization": "FireNet Systems",
          "activeSources": 6,
          "events": 190,
          "threats": 20
        },
        {
          "organization": "SafeWeb Services",
          "activeSources": 4,
          "events": 80,
          "threats": 5
        }
      ]
    })
    this.http.get<any>(`apiURL`);
  }
}

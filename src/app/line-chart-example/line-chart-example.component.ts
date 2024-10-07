import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-line-chart-example',
  templateUrl: './line-chart-example.component.html',
  styleUrls: ['./line-chart-example.component.scss']
})
export class LineChartExampleComponent implements OnInit {

  public Tesellum = [];

  constructor() {
    this.Tesellum = [
      { "DONEM": 2021, "KANTARADI": "ADAPAZARI A.Ş", "TESELLUM": 15 },
      { "DONEM": 2022, "KANTARADI": "ADAPAZARI A.Ş", "TESELLUM": 219874 },
      { "DONEM": 2023, "KANTARADI": "ADAPAZARI A.Ş", "TESELLUM": 9845 },
      { "DONEM": 2024, "KANTARADI": "ADAPAZARI A.Ş", "TESELLUM": 654987 },

      { "DONEM": 2021, "KANTARADI": "AFYON A.Ş", "TESELLUM": 50000 },
      { "DONEM": 2022, "KANTARADI": "AFYON A.Ş", "TESELLUM": 4900 },
      { "DONEM": 2023, "KANTARADI": "AFYON A.Ş", "TESELLUM": 48000 },
      { "DONEM": 2024, "KANTARADI": "AFYON A.Ş", "TESELLUM": 45000 },

      { "DONEM": 2021, "KANTARADI": "ALPULLU A.Ş", "TESELLUM": 39000 },
      { "DONEM": 2022, "KANTARADI": "ALPULLU A.Ş", "TESELLUM": 415000 },
      { "DONEM": 2023, "KANTARADI": "ALPULLU A.Ş", "TESELLUM": 38000 },
      { "DONEM": 2024, "KANTARADI": "ALPULLU A.Ş", "TESELLUM": 216568 },

      { "DONEM": 2021, "KANTARADI": "AMASYA A.Ş", "TESELLUM": 140000 },
      { "DONEM": 2022, "KANTARADI": "AMASYA A.Ş", "TESELLUM": 135000 },
      { "DONEM": 2023, "KANTARADI": "AMASYA A.Ş", "TESELLUM": 145000 },
      { "DONEM": 2024, "KANTARADI": "AMASYA A.Ş", "TESELLUM": 100800 },

      { "DONEM": 2021, "KANTARADI": "TÜRKŞEKER", "TESELLUM": 56542 },
      { "DONEM": 2022, "KANTARADI": "TÜRKŞEKER", "TESELLUM": 7100000 },
      { "DONEM": 2023, "KANTARADI": "TÜRKŞEKER", "TESELLUM": 1654897 },
      { "DONEM": 2024, "KANTARADI": "TÜRKŞEKER", "TESELLUM": 7864600 },

      { "DONEM": 2025, "KANTARADI": "AMASYA A.Ş", "TESELLUM": 15 },
      { "DONEM": 2025, "KANTARADI": "AFYON A.Ş", "TESELLUM": 20 },
      { "DONEM": 2025, "KANTARADI": "ALPULLU A.Ş", "TESELLUM": 40 },
      { "DONEM": 2025, "KANTARADI": "ADAPAZARI A.Ş", "TESELLUM": 80 },
      { "DONEM": 2025, "KANTARADI": "TÜRKŞEKER", "TESELLUM": 800 }

    ];
  }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const donemler = [...new Set(this.Tesellum.map(item => item.DONEM))];

    const groupedByKantaradi = this.Tesellum.reduce((acc, curr) => {
      if (!acc[curr.KANTARADI]) {
        acc[curr.KANTARADI] = [];
      }
      acc[curr.KANTARADI].push(curr.TESELLUM);
      return acc;
    }, {});

    const series = Object.keys(groupedByKantaradi).map(kantaradi => {
      return {
        name: kantaradi,
        data: groupedByKantaradi[kantaradi]
      };
    });

    var options = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      series: series,
      xaxis: {
        categories: donemler 
      },
      // stroke: {
      //   curve: 'smooth'
      // },
      title: {
        text: 'Tesellüm Grafiği',
        align: 'left'
      },
      yaxis: {
        title: {
          text: 'Tesellüm Miktarı'
        },
        logarithmic: true
      },
      responsive: [{

      }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }
}

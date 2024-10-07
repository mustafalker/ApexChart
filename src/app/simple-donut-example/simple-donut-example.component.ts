import { Component, OnInit } from '@angular/core';

export interface ChartOptions {
  series: number[];
  chart: {
    type: string;
  };
  legend: {
    position: string;
    show:boolean;
  };
  responsive: Array<{
    breakpoint: number;
    options: {
      chart: {
        width: number;
      };
      legend: {
        position: string;
      };
    };
  }>;
  labels: string[];
  tooltip?: {
    enabled: boolean;
    shared: boolean;
    followCursor: boolean;
    intersect: boolean;
    y: {
      formatter: (val: number, opts: { dataPointIndex: number }) => string;
      title?: { formatter: (seriesName: string) => string };
    };
  };
}

@Component({
  selector: 'app-simple-donut-example',
  templateUrl: './simple-donut-example.component.html',
  styleUrls: ['./simple-donut-example.component.scss']
})
export class SimpleDonutExampleComponent implements OnInit {

  public EkilenAlan = [];
  public availableYears: number[] = [];
  public selectedYear: number;
  public chartOptions: ChartOptions;

  constructor() {
    this.selectedYear = new Date().getFullYear();
    this.EkilenAlan = [
      [{"DonemYili":2021,"FabrikaKodu":1,"TURKSEKER_FABRIKA_KODU":25,"FABRIKAADI":"KARS","EkilenAlan":15660.76},{"DonemYili":2022,"FabrikaKodu":1,"TURKSEKER_FABRIKA_KODU":25,"FABRIKAADI":"KARS","EkilenAlan":14079.43},{"DonemYili":2023,"FabrikaKodu":1,"TURKSEKER_FABRIKA_KODU":25,"FABRIKAADI":"KARS","EkilenAlan":27336.65},{"DonemYili":2024,"FabrikaKodu":1,"TURKSEKER_FABRIKA_KODU":25,"FABRIKAADI":"KARS","EkilenAlan":21560.00},{"DonemYili":2021,"FabrikaKodu":2,"TURKSEKER_FABRIKA_KODU":5,"FABRIKAADI":"ANKARA","EkilenAlan":110960.02},{"DonemYili":2022,"FabrikaKodu":2,"TURKSEKER_FABRIKA_KODU":5,"FABRIKAADI":"ANKARA","EkilenAlan":90920.51},{"DonemYili":2023,"FabrikaKodu":2,"TURKSEKER_FABRIKA_KODU":5,"FABRIKAADI":"ANKARA","EkilenAlan":107050.11},{"DonemYili":2024,"FabrikaKodu":2,"TURKSEKER_FABRIKA_KODU":5,"FABRIKAADI":"ANKARA","EkilenAlan":88930.00},{"DonemYili":2025,"FabrikaKodu":2,"TURKSEKER_FABRIKA_KODU":5,"FABRIKAADI":"ANKARA","EkilenAlan":186.92},{"DonemYili":2021,"FabrikaKodu":3,"TURKSEKER_FABRIKA_KODU":12,"FABRIKAADI":"ERCİŞ","EkilenAlan":43253.05},{"DonemYili":2022,"FabrikaKodu":3,"TURKSEKER_FABRIKA_KODU":12,"FABRIKAADI":"ERCİŞ","EkilenAlan":60568.76},{"DonemYili":2023,"FabrikaKodu":3,"TURKSEKER_FABRIKA_KODU":12,"FABRIKAADI":"ERCİŞ","EkilenAlan":85444.35},{"DonemYili":2024,"FabrikaKodu":3,"TURKSEKER_FABRIKA_KODU":12,"FABRIKAADI":"ERCİŞ","EkilenAlan":44196.12},{"DonemYili":2021,"FabrikaKodu":4,"TURKSEKER_FABRIKA_KODU":16,"FABRIKAADI":"ESKİŞEHİR","EkilenAlan":199046.76},{"DonemYili":2022,"FabrikaKodu":4,"TURKSEKER_FABRIKA_KODU":16,"FABRIKAADI":"ESKİŞEHİR","EkilenAlan":127257.61},{"DonemYili":2023,"FabrikaKodu":4,"TURKSEKER_FABRIKA_KODU":16,"FABRIKAADI":"ESKİŞEHİR","EkilenAlan":178932.83},{"DonemYili":2024,"FabrikaKodu":4,"TURKSEKER_FABRIKA_KODU":16,"FABRIKAADI":"ESKİŞEHİR","EkilenAlan":202459.58},{"DonemYili":2021,"FabrikaKodu":5,"TURKSEKER_FABRIKA_KODU":3,"FABRIKAADI":"AĞRI","EkilenAlan":64756.33},{"DonemYili":2022,"FabrikaKodu":5,"TURKSEKER_FABRIKA_KODU":3,"FABRIKAADI":"AĞRI","EkilenAlan":74979.40},{"DonemYili":2023,"FabrikaKodu":5,"TURKSEKER_FABRIKA_KODU":3,"FABRIKAADI":"AĞRI","EkilenAlan":108491.57},{"DonemYili":2024,"FabrikaKodu":5,"TURKSEKER_FABRIKA_KODU":3,"FABRIKAADI":"AĞRI","EkilenAlan":72000.00},{"DonemYili":2021,"FabrikaKodu":6,"TURKSEKER_FABRIKA_KODU":19,"FABRIKAADI":"KASTAMONU","EkilenAlan":42572.84},{"DonemYili":2022,"FabrikaKodu":6,"TURKSEKER_FABRIKA_KODU":19,"FABRIKAADI":"KASTAMONU","EkilenAlan":46662.41},{"DonemYili":2023,"FabrikaKodu":6,"TURKSEKER_FABRIKA_KODU":19,"FABRIKAADI":"KASTAMONU","EkilenAlan":77983.32},{"DonemYili":2024,"FabrikaKodu":6,"TURKSEKER_FABRIKA_KODU":19,"FABRIKAADI":"KASTAMONU","EkilenAlan":60640.00},{"DonemYili":2021,"FabrikaKodu":7,"TURKSEKER_FABRIKA_KODU":20,"FABRIKAADI":"MALATYA","EkilenAlan":70623.87},{"DonemYili":2022,"FabrikaKodu":7,"TURKSEKER_FABRIKA_KODU":20,"FABRIKAADI":"MALATYA","EkilenAlan":66032.83},{"DonemYili":2023,"FabrikaKodu":7,"TURKSEKER_FABRIKA_KODU":20,"FABRIKAADI":"MALATYA","EkilenAlan":81125.00},{"DonemYili":2024,"FabrikaKodu":7,"TURKSEKER_FABRIKA_KODU":20,"FABRIKAADI":"MALATYA","EkilenAlan":79000.00},{"DonemYili":2021,"FabrikaKodu":8,"TURKSEKER_FABRIKA_KODU":22,"FABRIKAADI":"SUSURLUK","EkilenAlan":4265.18},{"DonemYili":2022,"FabrikaKodu":8,"TURKSEKER_FABRIKA_KODU":22,"FABRIKAADI":"SUSURLUK","EkilenAlan":3251.53},{"DonemYili":2023,"FabrikaKodu":8,"TURKSEKER_FABRIKA_KODU":22,"FABRIKAADI":"SUSURLUK","EkilenAlan":28113.26},{"DonemYili":2024,"FabrikaKodu":8,"TURKSEKER_FABRIKA_KODU":22,"FABRIKAADI":"SUSURLUK","EkilenAlan":6381.11},{"DonemYili":2021,"FabrikaKodu":9,"TURKSEKER_FABRIKA_KODU":24,"FABRIKAADI":"UŞAK","EkilenAlan":19683.86},{"DonemYili":2022,"FabrikaKodu":9,"TURKSEKER_FABRIKA_KODU":24,"FABRIKAADI":"UŞAK","EkilenAlan":26736.69},{"DonemYili":2023,"FabrikaKodu":9,"TURKSEKER_FABRIKA_KODU":24,"FABRIKAADI":"UŞAK","EkilenAlan":36217.34},{"DonemYili":2024,"FabrikaKodu":9,"TURKSEKER_FABRIKA_KODU":24,"FABRIKAADI":"UŞAK","EkilenAlan":27920.00},{"DonemYili":2021,"FabrikaKodu":10,"TURKSEKER_FABRIKA_KODU":27,"FABRIKAADI":"YOZGAT","EkilenAlan":79087.67},{"DonemYili":2022,"FabrikaKodu":10,"TURKSEKER_FABRIKA_KODU":27,"FABRIKAADI":"YOZGAT","EkilenAlan":62240.36},{"DonemYili":2023,"FabrikaKodu":10,"TURKSEKER_FABRIKA_KODU":27,"FABRIKAADI":"YOZGAT","EkilenAlan":78904.92},{"DonemYili":2024,"FabrikaKodu":10,"TURKSEKER_FABRIKA_KODU":27,"FABRIKAADI":"YOZGAT","EkilenAlan":66600.00},{"DonemYili":2021,"FabrikaKodu":11,"TURKSEKER_FABRIKA_KODU":10,"FABRIKAADI":"ELAZIĞ","EkilenAlan":42302.50},{"DonemYili":2022,"FabrikaKodu":11,"TURKSEKER_FABRIKA_KODU":10,"FABRIKAADI":"ELAZIĞ","EkilenAlan":41220.00},{"DonemYili":2023,"FabrikaKodu":11,"TURKSEKER_FABRIKA_KODU":10,"FABRIKAADI":"ELAZIĞ","EkilenAlan":56068.60},{"DonemYili":2024,"FabrikaKodu":11,"TURKSEKER_FABRIKA_KODU":10,"FABRIKAADI":"ELAZIĞ","EkilenAlan":41630.00},{"DonemYili":2021,"FabrikaKodu":12,"TURKSEKER_FABRIKA_KODU":8,"FABRIKAADI":"ÇARŞAMBA","EkilenAlan":1740.00},{"DonemYili":2022,"FabrikaKodu":12,"TURKSEKER_FABRIKA_KODU":8,"FABRIKAADI":"ÇARŞAMBA","EkilenAlan":1141.51},{"DonemYili":2023,"FabrikaKodu":12,"TURKSEKER_FABRIKA_KODU":8,"FABRIKAADI":"ÇARŞAMBA","EkilenAlan":1580.00},{"DonemYili":2024,"FabrikaKodu":12,"TURKSEKER_FABRIKA_KODU":8,"FABRIKAADI":"ÇARŞAMBA","EkilenAlan":357.18},{"DonemYili":2021,"FabrikaKodu":13,"TURKSEKER_FABRIKA_KODU":13,"FABRIKAADI":"EREĞLİ","EkilenAlan":223745.85},{"DonemYili":2022,"FabrikaKodu":13,"TURKSEKER_FABRIKA_KODU":13,"FABRIKAADI":"EREĞLİ","EkilenAlan":184401.37},{"DonemYili":2023,"FabrikaKodu":13,"TURKSEKER_FABRIKA_KODU":13,"FABRIKAADI":"EREĞLİ","EkilenAlan":352474.46},{"DonemYili":2024,"FabrikaKodu":13,"TURKSEKER_FABRIKA_KODU":13,"FABRIKAADI":"EREĞLİ","EkilenAlan":202036.06},{"DonemYili":2021,"FabrikaKodu":14,"TURKSEKER_FABRIKA_KODU":17,"FABRIKAADI":"ILGIN","EkilenAlan":168956.26},{"DonemYili":2022,"FabrikaKodu":14,"TURKSEKER_FABRIKA_KODU":17,"FABRIKAADI":"ILGIN","EkilenAlan":113647.07},{"DonemYili":2023,"FabrikaKodu":14,"TURKSEKER_FABRIKA_KODU":17,"FABRIKAADI":"ILGIN","EkilenAlan":180846.04},{"DonemYili":2024,"FabrikaKodu":14,"TURKSEKER_FABRIKA_KODU":17,"FABRIKAADI":"ILGIN","EkilenAlan":181430.00},{"DonemYili":2021,"FabrikaKodu":15,"TURKSEKER_FABRIKA_KODU":7,"FABRIKAADI":"BURDUR","EkilenAlan":84020.22},{"DonemYili":2022,"FabrikaKodu":15,"TURKSEKER_FABRIKA_KODU":7,"FABRIKAADI":"BURDUR","EkilenAlan":98887.21},{"DonemYili":2023,"FabrikaKodu":15,"TURKSEKER_FABRIKA_KODU":7,"FABRIKAADI":"BURDUR","EkilenAlan":144267.02},{"DonemYili":2024,"FabrikaKodu":15,"TURKSEKER_FABRIKA_KODU":7,"FABRIKAADI":"BURDUR","EkilenAlan":108620.00}]
    ];
  }

  ngOnInit(): void {
    this.extractYears();
    this.updateChartOptions();
  }

  extractYears(): void {
    const yearsSet = new Set<number>();
    this.EkilenAlan.forEach(data => {
      data.forEach(entry => {
        yearsSet.add(entry.DonemYili);
      });
    });
    this.availableYears = Array.from(yearsSet).sort((a, b) => a - b);
  }

  updateChartOptions(): void {
    const selectedData = this.EkilenAlan.flat().filter(entry => entry.DonemYili === this.selectedYear);

    const seriesData = selectedData.map(entry => entry.EkilenAlan);
    const labelsData = selectedData.map(entry => entry.FABRIKAADI);

    this.chartOptions = {
      series: seriesData,
      chart: {
        type: 'donut',
      },
      legend: {
        position: 'bottom',
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      labels: labelsData,
      tooltip: {
        enabled: true,
        shared: true,
        followCursor: true,
        intersect: false,
        y: {
          formatter: (val: number, opts: { dataPointIndex: number }) => {
            return `${val} m²`;
          },
          title: { formatter: (seriesName: string) => `${seriesName}` },
        },
      },
    };
  }

  onYearChange(year: number): void {
    this.selectedYear = year;
    this.updateChartOptions(); // Update the chart when the selected year changes
  }
}

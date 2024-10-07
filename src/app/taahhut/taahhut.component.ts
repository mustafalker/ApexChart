import { Component } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: any[];
  chart: {
    type: string;
    stacked: boolean;
  };
  xaxis: {
    categories: string[];
  };
  plotOptions: {
    bar: {
      horizontal: boolean;
      columnWidth: string;
      endingShape: string;
      resposiveble: boolean;
    };
  };
  title: {
    text: string,
    align: string
  }
};

@Component({
  selector: 'app-taahhut',
  templateUrl: './taahhut.component.html',
  styleUrls: ['./taahhut.component.scss']
})
export class TaahhutComponent {
  title = 'My ApexChart Application';
  public chartOptions: ChartOptions;

  public Taahhut = [];
  public Donem = [];

  constructor() {
    // Initialize Taahhut data
    this.Taahhut = [
      { "DONEM": 2023, "FIRMAADI": "ADAPAZARI A.Ş", "TAAHHUT": 500000 },
      { "DONEM": 2024, "FIRMAADI": "ADAPAZARI A.Ş", "TAAHHUT": 480500 },
      { "DONEM": 2024, "FIRMAADI": "AFYON A.Ş", "TAAHHUT": 50000 },
      { "DONEM": 2023, "FIRMAADI": "ALPULLU A.Ş", "TAAHHUT": 40000 },
      { "DONEM": 2024, "FIRMAADI": "ALPULLU A.Ş", "TAAHHUT": 50000 },
      { "DONEM": 2023, "FIRMAADI": "AMASYA A.Ş", "TAAHHUT": 150000 },
      { "DONEM": 2024, "FIRMAADI": "AMASYA A.Ş", "TAAHHUT": 110000 },
      { "DONEM": 2021, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 8596017 },
      { "DONEM": 2022, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 7345544 },
      { "DONEM": 2023, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 10121000 },
      { "DONEM": 2024, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 8100000 },
      { "DONEM": 2025, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 255 }
    ];

    this.Donem = [...new Set(this.Taahhut.map(item => item.DONEM))].sort((a,b) => a - b);

    const firms = [...new Set(this.Taahhut.map(item => item.FIRMAADI))]; 
    const seriesData = firms.map(firma => {
      return {
        name: firma,
        data: this.Donem.map(donem => {
          const taahhutItem = this.Taahhut.find(item => item.FIRMAADI === firma && item.DONEM === donem);
          return taahhutItem ? taahhutItem.TAAHHUT : 0; 
        })
      };
    });

    this.chartOptions = {
      series: seriesData,
      chart: {
        type: 'bar',
        stacked: true
      },
      xaxis: {
        categories: this.Donem 
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '65%',
          endingShape: 'flat',
          resposiveble: true
        }
      },
      title: {
        text: 'Selami Namer',
        align: 'center'
      }
    };
  }
}

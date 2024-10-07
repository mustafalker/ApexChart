import { Component } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

export type TaahhutChartOptions = {
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
    };
  };
  title: {
    text: string,
    align: string
  };
};

@Component({
  selector: 'app-taahhut-and-tesellum-stacked-chart',
  templateUrl: './taahhut-and-tesellum-stacked-chart.component.html',
  styleUrls: ['./taahhut-and-tesellum-stacked-chart.component.scss']
})
export class TaahhutAndTesellumStackedChartComponent {
  title = 'Taahhüt ve Tesellüm Karşılaştırma';
  public TaahhutChartOptions: TaahhutChartOptions;

  public Taahhut = [];
  public Tesellum = [];
  public Donem = [];

  constructor() {
    this.Taahhut = [
      { "DONEM": 2021, "FIRMAADI": "ADAPAZARI A.Ş", "TAAHHUT": 450000 },
      { "DONEM": 2022, "FIRMAADI": "ADAPAZARI A.Ş", "TAAHHUT": 460000 },
      { "DONEM": 2023, "FIRMAADI": "ADAPAZARI A.Ş", "TAAHHUT": 500000 },
      { "DONEM": 2024, "FIRMAADI": "ADAPAZARI A.Ş", "TAAHHUT": 480500 },
    
      { "DONEM": 2021, "FIRMAADI": "AFYON A.Ş", "TAAHHUT": 52000 },
      { "DONEM": 2022, "FIRMAADI": "AFYON A.Ş", "TAAHHUT": 51000 },
      { "DONEM": 2023, "FIRMAADI": "AFYON A.Ş", "TAAHHUT": 49000 },
      { "DONEM": 2024, "FIRMAADI": "AFYON A.Ş", "TAAHHUT": 50000 },
    
      { "DONEM": 2021, "FIRMAADI": "ALPULLU A.Ş", "TAAHHUT": 40000 },
      { "DONEM": 2022, "FIRMAADI": "ALPULLU A.Ş", "TAAHHUT": 42000 },
      { "DONEM": 2023, "FIRMAADI": "ALPULLU A.Ş", "TAAHHUT": 40000 },
      { "DONEM": 2024, "FIRMAADI": "ALPULLU A.Ş", "TAAHHUT": 200000 },
    
      { "DONEM": 2021, "FIRMAADI": "AMASYA A.Ş", "TAAHHUT": 145000 },
      { "DONEM": 2022, "FIRMAADI": "AMASYA A.Ş", "TAAHHUT": 140000 },
      { "DONEM": 2023, "FIRMAADI": "AMASYA A.Ş", "TAAHHUT": 150000 },
      { "DONEM": 2024, "FIRMAADI": "AMASYA A.Ş", "TAAHHUT": 110000 },
    
      { "DONEM": 2021, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 8596017 },
      { "DONEM": 2022, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 7345544 },
      { "DONEM": 2023, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 10121000 },
      { "DONEM": 2024, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 8100000 },
      { "DONEM": 2025, "FIRMAADI": "TÜRKŞEKER", "TAAHHUT": 25500 }
    ];
    
    this.Tesellum = [
      { "DONEM": 2021, "KANTARADI": "ADAPAZARI A.Ş", "TESELLUM": 440000 },
      { "DONEM": 2022, "KANTARADI": "ADAPAZARI A.Ş", "TESELLUM": 455000 },
      { "DONEM": 2023, "KANTARADI": "ADAPAZARI A.Ş", "TESELLUM": 490000 },
      { "DONEM": 2024, "KANTARADI": "ADAPAZARI A.Ş", "TESELLUM": 460500 },
    
      { "DONEM": 2021, "KANTARADI": "AFYON A.Ş", "TESELLUM": 50000 },
      { "DONEM": 2022, "KANTARADI": "AFYON A.Ş", "TESELLUM": 49500 },
      { "DONEM": 2023, "KANTARADI": "AFYON A.Ş", "TESELLUM": 48000 },
      { "DONEM": 2024, "KANTARADI": "AFYON A.Ş", "TESELLUM": 45000 },
    
      { "DONEM": 2021, "KANTARADI": "ALPULLU A.Ş", "TESELLUM": 39000 },
      { "DONEM": 2022, "KANTARADI": "ALPULLU A.Ş", "TESELLUM": 41000 },
      { "DONEM": 2023, "KANTARADI": "ALPULLU A.Ş", "TESELLUM": 38000 },
      { "DONEM": 2024, "KANTARADI": "ALPULLU A.Ş", "TESELLUM": 216568 },
    
      { "DONEM": 2021, "KANTARADI": "AMASYA A.Ş", "TESELLUM": 140000 },
      { "DONEM": 2022, "KANTARADI": "AMASYA A.Ş", "TESELLUM": 135000 },
      { "DONEM": 2023, "KANTARADI": "AMASYA A.Ş", "TESELLUM": 145000 },
      { "DONEM": 2024, "KANTARADI": "AMASYA A.Ş", "TESELLUM": 100800 },
    
      { "DONEM": 2021, "KANTARADI": "TÜRKŞEKER", "TESELLUM": 8200000 },
      { "DONEM": 2022, "KANTARADI": "TÜRKŞEKER", "TESELLUM": 7100000 },
      { "DONEM": 2023, "KANTARADI": "TÜRKŞEKER", "TESELLUM": 9800000 },
      { "DONEM": 2024, "KANTARADI": "TÜRKŞEKER", "TESELLUM": 7864600 }
    ];
    

    this.Donem = [...new Set(this.Taahhut.map(item => item.DONEM))].sort((a, b) => a - b);

    const firms = [...new Set(this.Taahhut.map(item => item.FIRMAADI))];
    const taahhutData = firms.map(firma => {
      return {
        name: firma + ' TAAHHUT',
        data: this.Donem.map(donem => {
          const taahhutItem = this.Taahhut.find(item => item.FIRMAADI === firma && item.DONEM === donem);
          return taahhutItem ? taahhutItem.TAAHHUT : 0;
        }),
        stack: 'Taahhut',
        group: 'TAAHHUT'
      };
    });

    const weighters = [...new Set(this.Tesellum.map(item => item.KANTARADI))];
    const tesellumData = weighters.map(kantar => {
      return {
        name: kantar + ' TESELLUM',
        data: this.Donem.map(donem => {
          const tesellumItem = this.Tesellum.find(item => item.KANTARADI === kantar && item.DONEM === donem);
          return tesellumItem ? tesellumItem.TESELLUM : 0;
        }),
        stack: 'Tesellum',
        group: 'TESELLUM'
      };
    });

    this.TaahhutChartOptions = {
      series: [...taahhutData, ...tesellumData], 
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
          columnWidth: '60%',
          endingShape: 'flat'
        }
      },
      title: {
        text: 'Taahhüt ve Tesellüm Karşılaştırma',
        align: 'center'
      }
    };
  }
}

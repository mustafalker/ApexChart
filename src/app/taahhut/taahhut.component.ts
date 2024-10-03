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
    this.Taahhut = [
      *
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

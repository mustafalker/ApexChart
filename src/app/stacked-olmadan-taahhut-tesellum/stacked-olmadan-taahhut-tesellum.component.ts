import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
  endingShape: String;
};
@Component({
  selector: 'app-stacked-olmadan-taahhut-tesellum',
  templateUrl: './stacked-olmadan-taahhut-tesellum.component.html',
  styleUrls: ['./stacked-olmadan-taahhut-tesellum.component.scss']
})
export class StackedOlmadanTaahhutTesellumComponent implements OnInit {

  title = 'My ApexChart Application';
  public chartOptions: Partial<ChartOptions>;

  public Taahhut = [];
  public Tesellum = [];
  public Donem = [];

  constructor() {
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

    this.Tesellum = [
      {
        "DonemYili": 2023,
        "FabrikaKodu": 27,
        "FABRIKA_ADI": "YOZGAT ŞEKER FABRİKASI",
        "NetPancar": 479655
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 3,
        "FABRIKA_ADI": "AĞRI ŞEKER FABRİKASI",
        "NetPancar": 330132
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 16,
        "FABRIKA_ADI": "ESKİŞEHİR ŞEKER FABRİKASI",
        "NetPancar": 778176
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 10,
        "FABRIKA_ADI": "ELAZIĞ ŞEKER FABRİKASI",
        "NetPancar": 206399
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 24,
        "FABRIKA_ADI": "UŞAK ŞEKER FABRİKASI",
        "NetPancar": 6906
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 5,
        "FABRIKA_ADI": "ANKARA ŞEKER FABRİKASI",
        "NetPancar": 530215
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 5,
        "FABRIKA_ADI": "ANKARA ŞEKER FABRİKASI",
        "NetPancar": 660388
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 19,
        "FABRIKA_ADI": "KASTAMONU ŞEKER FABRİKASI",
        "NetPancar": 200768
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 17,
        "FABRIKA_ADI": "ILGIN ŞEKER FABRİKASI",
        "NetPancar": 1563554
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 5,
        "FABRIKA_ADI": "ANKARA ŞEKER FABRİKASI",
        "NetPancar": 517448
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 25,
        "FABRIKA_ADI": "KARS ŞEKER FABRİKASI",
        "NetPancar": 47669
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 8,
        "FABRIKA_ADI": "ÇARŞAMBA ŞEKER FABRİKASI",
        "NetPancar": 6013
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 25,
        "FABRIKA_ADI": "KARS ŞEKER FABRİKASI",
        "NetPancar": 1027
      },
      {
        "DonemYili": 2020,
        "FabrikaKodu": 7,
        "FABRIKA_ADI": "BURDUR ŞEKER FABRİKASI",
        "NetPancar": 137
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 3,
        "FABRIKA_ADI": "AĞRI ŞEKER FABRİKASI",
        "NetPancar": 515021
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 19,
        "FABRIKA_ADI": "KASTAMONU ŞEKER FABRİKASI",
        "NetPancar": 2714
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 8,
        "FABRIKA_ADI": "ÇARŞAMBA ŞEKER FABRİKASI",
        "NetPancar": 4482
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 27,
        "FABRIKA_ADI": "YOZGAT ŞEKER FABRİKASI",
        "NetPancar": 9531
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 17,
        "FABRIKA_ADI": "ILGIN ŞEKER FABRİKASI",
        "NetPancar": 969519
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 25,
        "FABRIKA_ADI": "KARS ŞEKER FABRİKASI",
        "NetPancar": 55930
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 19,
        "FABRIKA_ADI": "KASTAMONU ŞEKER FABRİKASI",
        "NetPancar": 347415
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 20,
        "FABRIKA_ADI": "MALATYA ŞEKER FABRİKASI",
        "NetPancar": 371002
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 16,
        "FABRIKA_ADI": "ESKİŞEHİR ŞEKER FABRİKASI",
        "NetPancar": 21990
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 8,
        "FABRIKA_ADI": "ÇARŞAMBA ŞEKER FABRİKASI",
        "NetPancar": 9230
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 3,
        "FABRIKA_ADI": "AĞRI ŞEKER FABRİKASI",
        "NetPancar": 288234
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 10,
        "FABRIKA_ADI": "ELAZIĞ ŞEKER FABRİKASI",
        "NetPancar": 324639
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 17,
        "FABRIKA_ADI": "ILGIN ŞEKER FABRİKASI",
        "NetPancar": 19443
      },
      {
        "DonemYili": 2020,
        "FabrikaKodu": 16,
        "FABRIKA_ADI": "ESKİŞEHİR ŞEKER FABRİKASI",
        "NetPancar": 69
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 25,
        "FABRIKA_ADI": "KARS ŞEKER FABRİKASI",
        "NetPancar": 126832
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 27,
        "FABRIKA_ADI": "YOZGAT ŞEKER FABRİKASI",
        "NetPancar": 361780
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 24,
        "FABRIKA_ADI": "UŞAK ŞEKER FABRİKASI",
        "NetPancar": 101515
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 16,
        "FABRIKA_ADI": "ESKİŞEHİR ŞEKER FABRİKASI",
        "NetPancar": 1229194
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 16,
        "FABRIKA_ADI": "ESKİŞEHİR ŞEKER FABRİKASI",
        "NetPancar": 1173511
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 7,
        "FABRIKA_ADI": "BURDUR ŞEKER FABRİKASI",
        "NetPancar": 19133
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 20,
        "FABRIKA_ADI": "MALATYA ŞEKER FABRİKASI",
        "NetPancar": 498123
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 27,
        "FABRIKA_ADI": "YOZGAT ŞEKER FABRİKASI",
        "NetPancar": 373368
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 13,
        "FABRIKA_ADI": "EREĞLİ ŞEKER FABRİKASI",
        "NetPancar": 1334101
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 12,
        "FABRIKA_ADI": "ERCİŞ ŞEKER FABRİKASI",
        "NetPancar": 1624
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 7,
        "FABRIKA_ADI": "BURDUR ŞEKER FABRİKASI",
        "NetPancar": 856941
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 7,
        "FABRIKA_ADI": "BURDUR ŞEKER FABRİKASI",
        "NetPancar": 468424
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 19,
        "FABRIKA_ADI": "KASTAMONU ŞEKER FABRİKASI",
        "NetPancar": 222038
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 20,
        "FABRIKA_ADI": "MALATYA ŞEKER FABRİKASI",
        "NetPancar": 314530
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 13,
        "FABRIKA_ADI": "EREĞLİ ŞEKER FABRİKASI",
        "NetPancar": 2978256
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 22,
        "FABRIKA_ADI": "SUSURLUK ŞEKER FABRİKASI",
        "NetPancar": 216175
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 10,
        "FABRIKA_ADI": "ELAZIĞ ŞEKER FABRİKASI",
        "NetPancar": 23206
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 13,
        "FABRIKA_ADI": "EREĞLİ ŞEKER FABRİKASI",
        "NetPancar": 62898
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 22,
        "FABRIKA_ADI": "SUSURLUK ŞEKER FABRİKASI",
        "NetPancar": 35440
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 24,
        "FABRIKA_ADI": "UŞAK ŞEKER FABRİKASI",
        "NetPancar": 165338
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 13,
        "FABRIKA_ADI": "EREĞLİ ŞEKER FABRİKASI",
        "NetPancar": 1506592
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 12,
        "FABRIKA_ADI": "ERCİŞ ŞEKER FABRİKASI",
        "NetPancar": 208803
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 12,
        "FABRIKA_ADI": "ERCİŞ ŞEKER FABRİKASI",
        "NetPancar": 438389
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 17,
        "FABRIKA_ADI": "ILGIN ŞEKER FABRİKASI",
        "NetPancar": 1145742
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 5,
        "FABRIKA_ADI": "ANKARA ŞEKER FABRİKASI",
        "NetPancar": 30232
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 7,
        "FABRIKA_ADI": "BURDUR ŞEKER FABRİKASI",
        "NetPancar": 561488
      },
      {
        "DonemYili": 2021,
        "FabrikaKodu": 10,
        "FABRIKA_ADI": "ELAZIĞ ŞEKER FABRİKASI",
        "NetPancar": 206590
      },
      {
        "DonemYili": 2023,
        "FabrikaKodu": 24,
        "FABRIKA_ADI": "UŞAK ŞEKER FABRİKASI",
        "NetPancar": 231131
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 20,
        "FABRIKA_ADI": "MALATYA ŞEKER FABRİKASI",
        "NetPancar": 89952
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 22,
        "FABRIKA_ADI": "SUSURLUK ŞEKER FABRİKASI",
        "NetPancar": 25249
      },
      {
        "DonemYili": 2022,
        "FabrikaKodu": 12,
        "FABRIKA_ADI": "ERCİŞ ŞEKER FABRİKASI",
        "NetPancar": 306853
      },
      {
        "DonemYili": 2024,
        "FabrikaKodu": 3,
        "FABRIKA_ADI": "AĞRI ŞEKER FABRİKASI",
        "NetPancar": 20000
      },
      {
        "DonemYili": 2020,
        "FabrikaKodu": 20,
        "FABRIKA_ADI": "MALATYA ŞEKER FABRİKASI",
        "NetPancar": 945
      }
    ]

    const uniqueDonem = Array.from(new Set(this.Taahhut.map((item) => item.DONEM).sort((a,b) => a -b )));

    const taahhutSeries = uniqueDonem.map((donem) => {
      return this.Taahhut.filter((item) => item.DONEM === donem)
        .reduce((sum, current) => sum + current.TAAHHUT, 0);
    });

    const tesellumSeries = uniqueDonem.map((donem) => {
      return this.Tesellum.filter((item) => item.DonemYili === donem)
        .reduce((sum, current) => sum + current.NetPancar, 0);
    });


    this.chartOptions = {
      series: [
        {
          name: 'Taahhut',
          data: taahhutSeries
        },
        {
          name: 'Tesellum',
          data: tesellumSeries
        }
      ],
      chart: {
        type: 'bar',
        stacked: false
      },
      xaxis: {
        categories: uniqueDonem.map(String)
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
        }
      },
      title: {
        text: 'Selami Naptın Kanzi',
        align: 'center'
      }
    };
  }
  ngOnInit(): void {
  }

}

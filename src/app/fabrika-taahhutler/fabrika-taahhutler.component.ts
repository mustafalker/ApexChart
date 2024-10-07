import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexTitleSubtitle, ApexFill } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-fabrika-taahhutler',
  templateUrl: './fabrika-taahhutler.component.html',
  styleUrls: ['./fabrika-taahhutler.component.scss']
})
export class FabrikaTaahhutlerComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public Fabrikalar = [];
  public Tesellum = [];
  public availableYears: number[] = [];
  public selectedYear: number;

  constructor() {
    this.selectedYear = new Date().getFullYear();
    this.Fabrikalar = [
      { "FABRIKAADI": "KARS", "FABRIKAKODU": 1, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 25 },
      { "FABRIKAADI": "ANKARA", "FABRIKAKODU": 2, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 5 },
      { "FABRIKAADI": "ERCİŞ", "FABRIKAKODU": 3, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 12 },
      { "FABRIKAADI": "ESKİŞEHİR", "FABRIKAKODU": 4, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 16 },
      { "FABRIKAADI": "AĞRI", "FABRIKAKODU": 5, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 3 },
      { "FABRIKAADI": "KASTAMONU", "FABRIKAKODU": 6, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 19 },
      { "FABRIKAADI": "MALATYA", "FABRIKAKODU": 7, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 20 },
      { "FABRIKAADI": "SUSURLUK", "FABRIKAKODU": 8, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 22 },
      { "FABRIKAADI": "UŞAK", "FABRIKAKODU": 9, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 24 },
      { "FABRIKAADI": "YOZGAT", "FABRIKAKODU": 10, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 27 },
      { "FABRIKAADI": "ELAZIĞ", "FABRIKAKODU": 11, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 10 },
      { "FABRIKAADI": "ÇARŞAMBA", "FABRIKAKODU": 12, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 8 },
      { "FABRIKAADI": "EREĞLİ", "FABRIKAKODU": 13, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 13 },
      { "FABRIKAADI": "ILGIN", "FABRIKAKODU": 14, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 17 },
      { "FABRIKAADI": "BURDUR", "FABRIKAKODU": 15, "COMPANYREF": 1, "TURKSEKER_FABRIKA_KODU": 7 },
      { "FABRIKAADI": "ADAPAZARI ŞEKER", "FABRIKAKODU": 24, "COMPANYREF": 6 },
      { "FABRIKAADI": "KAYSERI ŞEKER", "FABRIKAKODU": 25, "COMPANYREF": 3 },
      { "FABRIKAADI": "AFYON", "FABRIKAKODU": 26, "COMPANYREF": 13 },
      { "FABRIKAADI": "ALPULLU", "FABRIKAKODU": 27, "COMPANYREF": 17 },
      { "FABRIKAADI": "AMASYA", "FABRIKAKODU": 28, "COMPANYREF": 5 },
      { "FABRIKAADI": "BOR", "FABRIKAKODU": 29, "COMPANYREF": 10 },
      { "FABRIKAADI": "ÇORUM", "FABRIKAKODU": 30, "COMPANYREF": 16 },
      { "FABRIKAADI": "ELBİSTAN", "FABRIKAKODU": 31, "COMPANYREF": 9 },
      { "FABRIKAADI": "ERZİNCAN", "FABRIKAKODU": 32, "COMPANYREF": 14 },
      { "FABRIKAADI": "ERZURUM", "FABRIKAKODU": 33, "COMPANYREF": 14 },
      { "FABRIKAADI": "KIRŞEHİR", "FABRIKAKODU": 34, "COMPANYREF": 11 },
      { "FABRIKAADI": "KONYA", "FABRIKAKODU": 35, "COMPANYREF": 2 },
      { "FABRIKAADI": "KÜTAHYA", "FABRIKAKODU": 36, "COMPANYREF": 7 },
      { "FABRIKAADI": "MUŞ", "FABRIKAKODU": 37, "COMPANYREF": 8 },
      { "FABRIKAADI": "KESKİNKILIÇ", "FABRIKAKODU": 38, "COMPANYREF": 4 },
      { "FABRIKAADI": "TURHAL ŞEKER", "FABRIKAKODU": 39, "COMPANYREF": 3 },
      { "FABRIKAADI": "BOĞAZLIYAN ŞEKER FABRİKASI", "FABRIKAKODU": 40, "COMPANYREF": 3 },
      { "FABRIKAADI": "ÇUMRA ŞEKER ENTEGRE TESİSLERİ", "FABRIKAKODU": 41, "COMPANYREF": 2 }
    ];
    this.Tesellum = [
        { "DonemYili": 2023, "FabrikaKodu": 17, "FABRIKA_ADI": "ILGIN ŞEKER FABRİKASI", "NetPancar": 1563554 },
        { "DonemYili": 2023, "FabrikaKodu": 8, "FABRIKA_ADI": "ÇARŞAMBA ŞEKER FABRİKASI", "NetPancar": 6013 },
        { "DonemYili": 2024, "FabrikaKodu": 25, "FABRIKA_ADI": "KARS ŞEKER FABRİKASI", "NetPancar": 9223 },
        { "DonemYili": 2021, "FabrikaKodu": 25, "FABRIKA_ADI": "KARS ŞEKER FABRİKASI", "NetPancar": 47669 },
        { "DonemYili": 2021, "FabrikaKodu": 5, "FABRIKA_ADI": "ANKARA ŞEKER FABRİKASI", "NetPancar": 517448 },
        { "DonemYili": 2023, "FabrikaKodu": 5, "FABRIKA_ADI": "ANKARA ŞEKER FABRİKASI", "NetPancar": 660388 },
        { "DonemYili": 2022, "FabrikaKodu": 5, "FABRIKA_ADI": "ANKARA ŞEKER FABRİKASI", "NetPancar": 530215 },
        { "DonemYili": 2021, "FabrikaKodu": 19, "FABRIKA_ADI": "KASTAMONU ŞEKER FABRİKASI", "NetPancar": 200768 },
        { "DonemYili": 2024, "FabrikaKodu": 27, "FABRIKA_ADI": "YOZGAT ŞEKER FABRİKASI", "NetPancar": 19298 },
        { "DonemYili": 2022, "FabrikaKodu": 8, "FABRIKA_ADI": "ÇARŞAMBA ŞEKER FABRİKASI", "NetPancar": 4482 },
        { "DonemYili": 2024, "FabrikaKodu": 19, "FABRIKA_ADI": "KASTAMONU ŞEKER FABRİKASI", "NetPancar": 5703 },
        { "DonemYili": 2023, "FabrikaKodu": 3, "FABRIKA_ADI": "AĞRI ŞEKER FABRİKASI", "NetPancar": 515021 },
        { "DonemYili": 2022, "FabrikaKodu": 17, "FABRIKA_ADI": "ILGIN ŞEKER FABRİKASI", "NetPancar": 969519 },
        { "DonemYili": 2023, "FabrikaKodu": 19, "FABRIKA_ADI": "KASTAMONU ŞEKER FABRİKASI", "NetPancar": 347415 },
        { "DonemYili": 2022, "FabrikaKodu": 25, "FABRIKA_ADI": "KARS ŞEKER FABRİKASI", "NetPancar": 55930 },
        { "DonemYili": 2024, "FabrikaKodu": 16, "FABRIKA_ADI": "ESKİŞEHİR ŞEKER FABRİKASI", "NetPancar": 41476 },
        { "DonemYili": 2021, "FabrikaKodu": 20, "FABRIKA_ADI": "MALATYA ŞEKER FABRİKASI", "NetPancar": 371002 },
        { "DonemYili": 2021, "FabrikaKodu": 27, "FABRIKA_ADI": "YOZGAT ŞEKER FABRİKASI", "NetPancar": 361780 },
        { "DonemYili": 2023, "FabrikaKodu": 25, "FABRIKA_ADI": "KARS ŞEKER FABRİKASI", "NetPancar": 126832 },
        { "DonemYili": 2021, "FabrikaKodu": 24, "FABRIKA_ADI": "UŞAK ŞEKER FABRİKASI", "NetPancar": 101515 },
        { "DonemYili": 2023, "FabrikaKodu": 16, "FABRIKA_ADI": "ESKİŞEHİR ŞEKER FABRİKASI", "NetPancar": 1229194 },
        { "DonemYili": 2021, "FabrikaKodu": 16, "FABRIKA_ADI": "ESKİŞEHİR ŞEKER FABRİKASI", "NetPancar": 1173511 },
        { "DonemYili": 2024, "FabrikaKodu": 7, "FABRIKA_ADI": "BURDUR ŞEKER FABRİKASI", "NetPancar": 30968 },
        { "DonemYili": 2022, "FabrikaKodu": 27, "FABRIKA_ADI": "YOZGAT ŞEKER FABRİKASI", "NetPancar": 373368 },
        { "DonemYili": 2024, "FabrikaKodu": 12, "FABRIKA_ADI": "ERCİŞ ŞEKER FABRİKASI", "NetPancar": 4310 },
        { "DonemYili": 2023, "FabrikaKodu": 20, "FABRIKA_ADI": "MALATYA ŞEKER FABRİKASI", "NetPancar": 498123 },
        { "DonemYili": 2021, "FabrikaKodu": 13, "FABRIKA_ADI": "EREĞLİ ŞEKER FABRİKASI", "NetPancar": 1334101 },
        { "DonemYili": 2022, "FabrikaKodu": 19, "FABRIKA_ADI": "KASTAMONU ŞEKER FABRİKASI", "NetPancar": 222038 },
        { "DonemYili": 2021, "FabrikaKodu": 7, "FABRIKA_ADI": "BURDUR ŞEKER FABRİKASI", "NetPancar": 468424 },
        { "DonemYili": 2023, "FabrikaKodu": 7, "FABRIKA_ADI": "BURDUR ŞEKER FABRİKASI", "NetPancar": 856941 },
        { "DonemYili": 2022, "FabrikaKodu": 20, "FABRIKA_ADI": "MALATYA ŞEKER FABRİKASI", "NetPancar": 314530 },
        { "DonemYili": 2023, "FabrikaKodu": 22, "FABRIKA_ADI": "SUSURLUK ŞEKER FABRİKASI", "NetPancar": 216175 },
        { "DonemYili": 2024, "FabrikaKodu": 10, "FABRIKA_ADI": "ELAZIĞ ŞEKER FABRİKASI", "NetPancar": 36486 },
        { "DonemYili": 2021, "FabrikaKodu": 22, "FABRIKA_ADI": "SUSURLUK ŞEKER FABRİKASI", "NetPancar": 35440 },
        { "DonemYili": 2023, "FabrikaKodu": 13, "FABRIKA_ADI": "EREĞLİ ŞEKER FABRİKASI", "NetPancar": 2978256 },
        { "DonemYili": 2024, "FabrikaKodu": 13, "FABRIKA_ADI": "EREĞLİ ŞEKER FABRİKASI", "NetPancar": 97092 },
        { "DonemYili": 2022, "FabrikaKodu": 16, "FABRIKA_ADI": "ESKİŞEHİR ŞEKER FABRİKASI", "NetPancar": 778176 },
        { "DonemYili": 2023, "FabrikaKodu": 27, "FABRIKA_ADI": "YOZGAT ŞEKER FABRİKASI", "NetPancar": 479655 },
        { "DonemYili": 2022, "FabrikaKodu": 10, "FABRIKA_ADI": "ELAZIĞ ŞEKER FABRİKASI", "NetPancar": 206399 },
        { "DonemYili": 2024, "FabrikaKodu": 24, "FABRIKA_ADI": "UŞAK ŞEKER FABRİKASI", "NetPancar": 14172 },
        { "DonemYili": 2022, "FabrikaKodu": 3, "FABRIKA_ADI": "AĞRI ŞEKER FABRİKASI", "NetPancar": 330132 },
        { "DonemYili": 2023, "FabrikaKodu": 24, "FABRIKA_ADI": "UŞAK ŞEKER FABRİKASI", "NetPancar": 231131 },
        { "DonemYili": 2022, "FabrikaKodu": 7, "FABRIKA_ADI": "BURDUR ŞEKER FABRİKASI", "NetPancar": 561488 },
        { "DonemYili": 2021, "FabrikaKodu": 10, "FABRIKA_ADI": "ELAZIĞ ŞEKER FABRİKASI", "NetPancar": 206590 },
        { "DonemYili": 2022, "FabrikaKodu": 22, "FABRIKA_ADI": "SUSURLUK ŞEKER FABRİKASI", "NetPancar": 25249 },
        { "DonemYili": 2024, "FabrikaKodu": 20, "FABRIKA_ADI": "MALATYA ŞEKER FABRİKASI", "NetPancar": 110270 },
        { "DonemYili": 2021, "FabrikaKodu": 8, "FABRIKA_ADI": "ÇARŞAMBA ŞEKER FABRİKASI", "NetPancar": 9230 },
        { "DonemYili": 2023, "FabrikaKodu": 10, "FABRIKA_ADI": "ELAZIĞ ŞEKER FABRİKASI", "NetPancar": 324639 },
        { "DonemYili": 2021, "FabrikaKodu": 3, "FABRIKA_ADI": "AĞRI ŞEKER FABRİKASI", "NetPancar": 288234 },
        { "DonemYili": 2024, "FabrikaKodu": 17, "FABRIKA_ADI": "ILGIN ŞEKER FABRİKASI", "NetPancar": 33511 },
        { "DonemYili": 2022, "FabrikaKodu": 12, "FABRIKA_ADI": "ERCİŞ ŞEKER FABRİKASI", "NetPancar": 306853 },
        { "DonemYili": 2024, "FabrikaKodu": 3, "FABRIKA_ADI": "AĞRI ŞEKER FABRİKASI", "NetPancar": 47334 },
        { "DonemYili": 2021, "FabrikaKodu": 17, "FABRIKA_ADI": "ILGIN ŞEKER FABRİKASI", "NetPancar": 1145742 },
        { "DonemYili": 2022, "FabrikaKodu": 24, "FABRIKA_ADI": "UŞAK ŞEKER FABRİKASI", "NetPancar": 165338 }
      ];  

    this.Tesellum.sort((a, b) => a.FABRIKA_ADI.localeCompare(b.FABRIKA_ADI, 'tr'));

    this.availableYears = [...new Set(this.Tesellum.map(t => t.DonemYili))]; 
  }

  ngOnInit(): void {
    this.availableYears = [...new Set(this.Tesellum.map(item => item.DonemYili))].sort((a, b) => a - b);
    
    this.updateChart(this.selectedYear);
  }

  updateChart(year: number) {
    const filteredData = this.Tesellum.filter(t => t.DonemYili === year);
    
    this.chartOptions = {
      series: [
        {
          name: "Net Pancar",
          data: filteredData.map(t => t.NetPancar)
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: +10000,
        style: {
          colors: ['rgb(255, 255, 255)'] 
        }
      },
      xaxis: {
        categories: filteredData.map(t => t.FABRIKA_ADI)
      },
      fill: {
        opacity: 1,
      },
      title: {
        text: `Net Pancar Tesellüm - ${year}`
      }
    };
  }

  onYearChange(year: number) {
    this.selectedYear = year;
    this.updateChart(year);
  }
}

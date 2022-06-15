import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { randomData } from '../../functions/app.function';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  private chartLineInstance?: Chart;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const me = this;
    me.initChartLine();
  }

  private initChartLine(): void {
    const me = this;
    const interval = setInterval(() => {
      const chartEl = document.getElementById(
        'chartLineId'
      ) as HTMLCanvasElement | null;
      if (!!chartEl) {
        const ctx = chartEl.getContext('2d');
        if (ctx) {
          const options = me.getConfigOptionsChart();
          const data = me.getDataChart();
          me.chartLineInstance = new Chart(ctx, {
            type: 'line',
            data,
            options,
          });
          clearInterval(interval);
        }
      }
    }, 10);
  }

  // LineDatasets
  private getDataChart() {
    const me = this;
    const datasets = me.getDatasetsChart();
    const labels = me.getLabelsChart();

    return {
      labels,
      datasets,
    };
  }

  private getDatasetsChart() {
    const canvas = document.getElementById(
      'chartLineId'
    ) as HTMLCanvasElement | null;
    const ctx = canvas!.getContext('2d');
    const gradient = ctx!.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(121,136,163,100)');
    gradient.addColorStop(1, 'rgba(121,136,163,0)');
    const LineDatasets = [
      {
        label: 'New Patients ',
        data: [
          ...Array(20)
            .fill(1)
            .map((item) => randomData(0, 10)),
        ],
        backgroundColor: gradient,
        borderColor: '#8146FF',
        tension: 0.5,
        pointBorderWidth: 3,
        pointRadius: 6,
        borderWidth: 4,
        pointBorderColor: '#FFF',
        fill: true,
      },

      {
        label: 'Old Patients',
        data: [
          ...Array(20)
            .fill(1)
            .map((item) => randomData(0, 10)),
        ],

        backgroundColor: gradient,
        borderColor: '#0075FF',
        tension: 0.5,
        pointBorderWidth: 3,
        pointRadius: 6,
        borderWidth: 4,
        pointBorderColor: '#FFF',
        fill: true,
      },
    ];

    return LineDatasets;
  }

  private getLabelsChart() {
    const labels: string[] = [];
    Array(12)
      .fill(0)
      .map((_, index: number) => {
        const monthName = new Date();
        monthName.setMonth(index);
        labels.push(monthName.toLocaleDateString('en-US', { month: 'short' }));
      });
    // console.log(labels);
    return labels;
  }

  // config options
  private getConfigOptionsChart() {
    const me = this;
    const plugins = me.getConfigPluginsChart();
    return {
      responsive: true,
      plugins,

      scales: {
        x: {},
        y: {
          grid: {
            display: false,
          },
        },
      },
    };
  }

  private getConfigPluginsChart() {
    return {
      legend: {
        display: true,
        labels: {
          color: '#FFFFFF',
        },
      },
    };
  }

  // update
  private updateDatasetsChart(): void {}
}

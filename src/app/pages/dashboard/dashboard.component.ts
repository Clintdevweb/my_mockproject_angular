import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Chart, Plugin, registerables } from 'chart.js';
import { randomData } from 'src/app/shared/functions/app.function';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  private chartLineInstance?: Chart;
  private chartBarInstance?: Chart;
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit(): void {
    const me = this;
    me.initChartLine();
    me.initChartBar();
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

  // Bar charts
  private initChartBar(): void {
    const me = this;
    const interval = setInterval(() => {
      const chartBarEl = document.getElementById(
        'chartBarId'
      ) as HTMLCanvasElement | null;

      if (!!chartBarEl) {
        const ctx = chartBarEl.getContext('2d');

        if (ctx) {
          const options = me.getConfigOptionsChartBar();
          const data = me.getDataChartBar();
          me.chartBarInstance = new Chart(ctx, {
            type: 'bar',
            data,
            options,
          });
        }
        clearInterval(interval);
      }
    });
  }

  private getDataChartBar() {
    const me = this;
    const datasets = me.getDataSetsChartBar();
    const labels = me.getLabelsBarChart();

    return {
      datasets,
      labels,
    };
  }

  private getDataSetsChartBar() {
    const BarDatasets = [
      {
        label: '',
        data: [
          ...Array(20)
            .fill(0)
            .map((item) => randomData(0, 1000)),
        ],
        backgroundColor: ['#CCB7FB'],
        hoverBackgroundColor: ['#8146FF'],
        borderRadius: 5,
      },
    ];
    return BarDatasets;
  }

  private getLabelsBarChart() {
    const labels: string[] = [];
    const dayName = new Date();
    const first = dayName.getDate() - dayName.getDay();
    Array(7)
      .fill(0)
      .map((_, index: number) => {
        dayName.setDate(first + index);
        labels.push(dayName.toLocaleDateString('en-US', { weekday: 'short' }));
      });
    console.log(labels);
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

  private getConfigOptionsChartBar() {
    const me = this;
    const plugins = me.getConfigPluginsChart();
    return {
      responsive: true,
      plugins,
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
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
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
        },
      },
    };
  }

  // update
  private updateDatasetsChart(): void {}
}

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
  private chartInstance?: Chart;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const me = this;
    me.initChartLine();
  }

  private initChartLine(): void {
    const me = this;
    const interval = setInterval(() => {
      const chartEl = document.getElementById(
        'chartLineId'
      ) as HTMLCanvasElement;

      if (!!chartEl) {
        const ctx = chartEl.getContext('2d');
        if (ctx) {
          const options = me.getConfigOptionsChart();
          const data = me.getDataChart();
          me.chartInstance = new Chart(ctx, {
            type: 'line',
            data,
            options,
          });
          clearInterval(interval);
        }
      }
    }, 10);
  }

  private initChartBar(): void {
    const me = this;
    const interval = setInterval(() => {
      const chartBarEl = document.getElementById(
        'chartBarId'
      ) as HTMLCanvasElement;

      if (!!chartBarEl) {
        const ctx = chartBarEl.getContext('2d');
        if (ctx) {
          const option = me.getConfigOptionsChart();
          const data = me.getDataChartBar();
        }
      }
    });
  }

  getDataChartBar() {}

  private updateDatasetsChart(): void {}

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
    const fakeDatasets = [
      {
        label: 'New Patients ',

        data: [
          ...Array(20)
            .fill(1)
            .map((item) => randomData(0, 10)),
        ],
        backgroundColor: ['#8146FF'],
        borderColor: '#8146FF',
        tension: 0.5,
        pointBorderWidth: 3,
        pointRadius: 6,
        borderWidth: 4,
        pointBorderColor: '#FFF',
      },

      {
        label: 'Old Patients',

        data: [
          ...Array(20)
            .fill(1)

            .map((item) => randomData(0, 10)),
        ],

        backgroundColor: ['#0075FF'],
        borderColor: '#0075FF',
        tension: 0.5,
        pointBorderWidth: 3,
        pointRadius: 6,
        borderWidth: 4,
        pointBorderColor: '#FFF',
      },
    ];

    return fakeDatasets;
  }

  private getLabelsChart() {
    const labels: string[] = [];
    Array(12)
      .fill(0)
      .map((_, index: number) => {
        const monthName = new Date();
        monthName.setMonth(index);
        labels.push(
          monthName.toLocaleDateString('default', { month: 'short' })
        );
      });

    return labels;
  }

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
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
        },
      },
    };
  }
}

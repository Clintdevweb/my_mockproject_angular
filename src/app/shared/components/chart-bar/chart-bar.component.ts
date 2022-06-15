import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { randomData } from '../../functions/app.function';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss'],
})
export class ChartBarComponent implements OnInit {
  private chartBarInstance?: Chart;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const me = this;
    me.initChartBar();
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
        display: false,
        labels: {
          color: 'rgb(255, 99, 132)',
        },
      },
    };
  }
}

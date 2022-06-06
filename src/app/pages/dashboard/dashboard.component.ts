import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  basicData: any;
  basicOptions: any;

  constructor() {}

  ngOnInit() {
    this.basicData = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],

      datasets: [
        {
          label: 'New patients',

          data: [
            3000, 2000, 4000, 5000, 3000, 2000, 1500, 3000, 1000, 4000, 1000,
            900,
          ],
          fill: false,
          borderColor: '#8146ff',
          color: '#fff',
          tension: 0.4,
        },
        {
          label: 'Old patients',
          data: [
            4000, 4000, 6000, 8600, 5000, 5000, 3000, 7000, 4000, 6000, 3000,
            4000,
          ],
          fill: false,
          borderColor: '#579aff',
          tension: 0.4,
        },
      ],
    };
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#fff',
           
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#fff',
          },
        },
        y: {
          display: true,

          ticks: {
            color: '#fff',
          },
          grid: {
            drawOnChartArea: false,
            // color: 'rgba(255,255,255,0.2)'
        }
        },
      },
    };
  }
}

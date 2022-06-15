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
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit(): void {}
}

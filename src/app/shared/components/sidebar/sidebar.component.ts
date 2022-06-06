import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navs: any[] = [
    { name: 'dashboard' },
    { name: 'appointment' },
    { name: 'doctors' },
    { name: 'departments' },
    { name: 'patients' },
    { name: 'chats' },
    { name: 'calls' },
  ];

  constructor() {}

  ngOnInit() {}
}

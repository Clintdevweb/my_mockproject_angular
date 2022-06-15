import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-list-doctor',
  templateUrl: './top-list-doctor.component.html',
  styleUrls: ['./top-list-doctor.component.scss'],
})
export class TopListDoctorComponent implements OnInit {
  listTopDoctor: any[] = [
    { avatar: '', name: 'Thomas D', active: true },
    { avatar: '', name: 'Thomas D', active: true },
    { avatar: '', name: 'Thomas D', active: true },
    { avatar: '', name: 'Thomas D', active: true },
    { avatar: '', name: 'Thomas D', active: true },
  ];
  constructor() {}

  ngOnInit() {}
}

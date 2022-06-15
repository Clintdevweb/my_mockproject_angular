import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-appoint-list',
  templateUrl: './table-appoint-list.component.html',
  styleUrls: ['./table-appoint-list.component.scss'],
})
export class TableAppointListComponent implements OnInit {
  listAppointment: any[] = [
   
    {
      no: 1,
      date: '2022-06-15',
      roomNum: '200',
      id: 'nOEfXxEKa0rzB10ZfABm',
      name: 'Nhieu',
      time: '16:07',
    },
    {
      no: 1,
      date: '2022-06-15',
      roomNum: '200',
      id: 'nOEfXxEKa0rzB10ZfABm',
      name: 'Nhieu',
      time: '16:07',
    },
    {
      no: 1,
      date: '2022-06-15',
      roomNum: '200',
      id: 'nOEfXxEKa0rzB10ZfABm',
      name: 'Nhieu',
      time: '16:07',
    },{
      no: 1,
      date: '2022-06-15',
      roomNum: '200',
      id: 'nOEfXxEKa0rzB10ZfABm',
      name: 'Nhieu',
      time: '16:07',
    },{
      no: 1,
      date: '2022-06-15',
      roomNum: '200',
      id: 'nOEfXxEKa0rzB10ZfABm',
      name: 'Nhieu',
      time: '16:07',
    },
  ];
  headTables: string[] = [
    'No',
    'Patients Name',
    'Date of admit',
    'Disease',
    'Room No',
    'Action',
  ];
  constructor() {}

  ngOnInit() {}
}

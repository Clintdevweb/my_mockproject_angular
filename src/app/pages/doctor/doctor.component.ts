import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  display: boolean = false;
  items: MenuItem[] = [];
  constructor(private router:Router) {}

  ngOnInit() {
    const me = this
    me.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
    ];
  }

  showDialog() {
    const me = this
    me.display = true;
  }

  routingAddDoctor(){
    const me = this
    me.router.navigate(['add-doctors'])
  }

}

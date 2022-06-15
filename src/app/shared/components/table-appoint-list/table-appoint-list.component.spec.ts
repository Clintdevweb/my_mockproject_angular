/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableAppointListComponent } from './table-appoint-list.component';

describe('TableAppointListComponent', () => {
  let component: TableAppointListComponent;
  let fixture: ComponentFixture<TableAppointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAppointListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAppointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

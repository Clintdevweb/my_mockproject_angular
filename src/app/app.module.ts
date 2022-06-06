import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentModule } from './pages/appointment/appointment.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { ShareModule } from './shared/share.module';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './shared/components/layout/layout.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppointmentModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

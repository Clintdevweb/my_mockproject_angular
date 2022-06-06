import { Appoint, DashBoard, Doctor, logoSVG } from './svg/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  //   imports: [
  //     SvgIconsModule.forRoot({
  //       sizes: {
  //         xs: '5px',
  //         sm: '12px',
  //         md: '16px',
  //         lg: '20px',
  //         xl: '25px',
  //         xxl: '30px',
  //       },

  //       icons: [logoSVG, Appoint, DashBoard, Doctor],
  //     }),
  //   ],
  imports: [AngularSvgIconModule.forRoot({})],
  declarations: [],
  exports: [AngularSvgIconModule],
})
export class IconModule {}

import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';

const MaterialComponents = [ButtonModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}

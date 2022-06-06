import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatsComponent } from './chats.component';
import { ChatsRoutes } from './chats.routing';

const imports: any = [ChatsRoutes, CommonModule];
const declarations: any = [ChatsComponent];
@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class ChatsModules {}

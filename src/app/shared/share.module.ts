import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { IconModule } from 'src/assets/icons/icon.module';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    InputTextModule,
    IconModule
  ],
  exports: [SidebarComponent, HeaderComponent],
  providers: [MessageService],
})
export class ShareModule {}

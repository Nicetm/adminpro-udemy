import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefaoudComponent } from './nopagefaoud/nopagefaoud.component';

@NgModule({
  declarations: [
    NopagefaoudComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NopagefaoudComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ]
})
export class SharedModule { }

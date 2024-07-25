import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LangingPageRoutingModule } from './langing-page-routing.module';
import { HiComponent } from './hi/hi.component';


@NgModule({
  declarations: [
    HiComponent
  ],
  imports: [
    CommonModule,
    LangingPageRoutingModule
  ]
})
export class LangingPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCarsRoutingModule } from './all-cars-routing.module';
import { AllCarDisplayComponent } from './all-car-display/all-car-display.component';


@NgModule({
  declarations: [
    AllCarDisplayComponent
  ],
  imports: [
    CommonModule,
    AllCarsRoutingModule,
    
  ]
})
export class AllCarsModule { }

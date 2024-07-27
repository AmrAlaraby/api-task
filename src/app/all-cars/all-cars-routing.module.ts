import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCarDisplayComponent } from './all-car-display/all-car-display.component';


const routes: Routes = [{path:'cars',component:AllCarDisplayComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCarsRoutingModule { }

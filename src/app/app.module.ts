import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { RentalDealsComponent } from './rental-deals/rental-deals.component';
import { HttpClientModule } from '@angular/common/http';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AllCarsModule } from './all-cars/all-cars.module';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    RentalDealsComponent,
    HowItWorkComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    DownloadComponent,
    FooterComponent,
    HomeComponent,
    CarDetailsComponent,
    
  ],
  imports: [AllCarsModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

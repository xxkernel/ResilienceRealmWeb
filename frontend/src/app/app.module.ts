import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { AboutComponent } from './pages/home/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { TypesOfAboutComponent } from './pages/home/types-of-about/types-of-about.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CardsComponent } from './pages/pricing/cards/cards.component';
import { StudiosComponent } from './pages/studios/studios.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AboutComponent,
    HomeComponent,
    TypesOfAboutComponent,
    NavbarComponent,
    FooterComponent,
    PricingComponent,
    CardsComponent,
    StudiosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

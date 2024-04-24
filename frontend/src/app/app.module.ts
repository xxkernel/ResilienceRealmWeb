import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { AboutComponent } from './pages/home/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { TypesOfAboutComponent } from './pages/home/types-of-about/types-of-about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CardsComponent } from './pages/pricing/cards/cards.component';
import { StudiosComponent } from './pages/studios/studios.component';
import { AlmatyStudiosComponent } from './pages/almaty-studios/almaty-studios.component';
import { AstanaStudiosComponent } from './pages/astana-studios/astana-studios.component';
import { UralskStudiosComponent } from './pages/uralsk-studios/uralsk-studios.component';
import { ShymkentStudiosComponent } from './pages/shymkent-studios/shymkent-studios.component';
import { KaragandaStudiosComponent } from './pages/karaganda-studios/karaganda-studios.component';
import { ButtonsCityComponent } from './pages/studios/buttons-city/buttons-city.component';
import { SelectMainComponent } from './pages/almaty-studios/select-main/select-main.component';

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
    AlmatyStudiosComponent,
    AstanaStudiosComponent,
    UralskStudiosComponent,
    ShymkentStudiosComponent,
    KaragandaStudiosComponent,
    ButtonsCityComponent,
    SelectMainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

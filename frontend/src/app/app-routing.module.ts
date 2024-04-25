import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { StudiosComponent } from './pages/studios/studios.component';
import { AlmatyStudiosComponent } from './pages/almaty-studios/almaty-studios.component';
import { UralskStudiosComponent } from './pages/uralsk-studios/uralsk-studios.component';
import { AstanaStudiosComponent } from './pages/astana-studios/astana-studios.component';
import { ShymkentStudiosComponent } from './pages/shymkent-studios/shymkent-studios.component';
import { KaragandaStudiosComponent } from './pages/karaganda-studios/karaganda-studios.component';
import { LoginComponent } from './pages/login/login.component';
// import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'studios', component: StudiosComponent },
  { path: 'studios/almaty', component: AlmatyStudiosComponent },
  { path: 'studios/astana', component: AstanaStudiosComponent },
  { path: 'studios/uralsk', component: UralskStudiosComponent },
  { path: 'studios/shymkent', component: ShymkentStudiosComponent },
  { path: 'studios/karaganda', component: KaragandaStudiosComponent },
  { path: '/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

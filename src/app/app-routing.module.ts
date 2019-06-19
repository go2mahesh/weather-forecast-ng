import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodComponent } from './components/apod/apod.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NewsComponent } from './components/news/news.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'apod', component: ApodComponent},
  { path: 'weather', component: WeatherComponent},
  { path: 'home', component: HomeComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contactme', component: ContactmeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: NotfoundComponent},
  { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

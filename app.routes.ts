import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { OfficeHours } from './office-hours/office-hours';

export const routes: Routes = [
  { path: '', component: Home, title: 'Nebo Chiropractic' },
  { path: 'about-us', component: AboutUs, title: 'Nebo Chiropractic' },
  { path: 'office-hours', component: OfficeHours, title: 'Nebo Chiropractic' },
];

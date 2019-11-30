import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInComponent } from './checkIn/checkIn.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { 
    path: 'home',
    component: HomeComponent 
  }, 
  { 
    path: 'checkIn', 
    component: CheckInComponent 
  },
  { 
    path: 'checkOut', 
    component: CheckOutComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

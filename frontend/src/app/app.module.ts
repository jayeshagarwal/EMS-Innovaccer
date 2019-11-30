import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckInComponent } from './checkIn/checkIn.component'
import { CheckInService } from './services/checkIn.service';
import { HomeComponent } from './home/home.component'
import { HomeService } from './services/home.service';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CheckOutComponent } from './check-out/check-out.component';
import { CheckOutService } from './services/check-out.service';


@NgModule({
  declarations: [
    AppComponent,
    CheckInComponent,
    HomeComponent,
    CheckOutComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CheckInService, HomeService, CheckOutService],
  bootstrap: [AppComponent]
})
export class AppModule { }

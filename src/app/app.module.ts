import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LandingComponent } from './landing/landing.component';
import { GraficoComponent } from './grafico/grafico.component';

import { ChartModule } from 'primeng/chart';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [AppComponent, LandingComponent, GraficoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ChartModule,
    HttpClientModule,
    ImageModule,
    ProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SliderComponent } from './slider/slider.component';
import { GraphComponent } from './graph/graph.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SliderComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    GoogleChartsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CountdownComponent } from './home-screen/countdown/countdown.component';
import { FlexModule } from '@angular/flex-layout';
import { ProgressLineComponent } from './home-screen/progress-line/progress-line.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    CountdownComponent,
    ProgressLineComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule,
        FlexModule,
        MatProgressBarModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

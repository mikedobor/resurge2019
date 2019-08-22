import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatVideoModule } from 'mat-video';

import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HomeComponent } from './pages/home/home.component';
import { DevotionalComponent } from './pages/devotional/devotional.component';
import { MediaComponent } from './pages/media/media.component';
import { ConfessionComponent } from './pages/confession/confession.component';
import { UserpageComponent } from './pages/userpage/userpage.component';
import { TopnavComponent } from './pages/topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevotionalComponent,
    MediaComponent,
    ConfessionComponent,
    UserpageComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatVideoModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

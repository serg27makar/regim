import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab2DataService } from './tab2/service/tab2-data.service';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {NeedSignInModal} from './tab2/screens/income/needSignInModal';

@NgModule({
  declarations: [
    AppComponent,
    NeedSignInModal
  ],
  entryComponents: [NeedSignInModal],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    Tab2DataService,
    ModalController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {IonicModule, IonicRouteStrategy, NavController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab2DataService } from './tab2/service/tab2-data.service';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {TurnoverModal} from './modals/turnover/turnover.modal';
import {FormsModule} from '@angular/forms';
import {EditModal} from './modals/edit-modal/edit.modal';
import {DeleteModal} from './modals/delete-modal/delete.modal';

@NgModule({
  declarations: [
    AppComponent,
    TurnoverModal,
    EditModal,
    DeleteModal
  ],
  entryComponents: [TurnoverModal, EditModal, DeleteModal],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    Tab2DataService,
    ModalController,
    NavController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

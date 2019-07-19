import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
// import {LoadingController} from 'ionic-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  constructor(
    private dataService: DataService,
    // private loadingCtrl: LoadingController
  ) {
    console.log('--->>>');
    // this.presentLoadingDefault();
  }

 /* presentLoadingDefault() {
    console.log('--->>>', this.loadingCtrl.create());
    let loading = this.loadingCtrl.create();

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }*/

  setData() {
    let data = {
      adminName: 'serg',
      Password: '123456'
    };
    this.dataService.setData(data).subscribe((res: any) => {
      console.log('--->>>', res);
    });
  }
  socketUp() {
    let user = {
      userName: 'data.userName',
      department: 'data.department',
      notes: 'data.notes',
    };
    this.dataService.userIns(user).subscribe((res: any) => {
      console.log('--->>>', res);
    });
}
}

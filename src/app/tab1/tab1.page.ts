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
  ) {}

  setData() {
    let data = {
      adminName: 'serg',
      Password: '123456'
    };
    this.dataService.setData(data).subscribe((res: any) => {
      console.log('--->>>', res);
    });
  }


}

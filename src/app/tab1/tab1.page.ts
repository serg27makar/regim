import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  textT:any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: 'Weeks',
    Days: 'Day',
    Hours: 'Hours',
    Minutes: 'Minutes',
    Seconds: 'Seconds',
    MilliSeconds: 'MilliSeconds'
  };
  endTime: any = 1556132451;

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

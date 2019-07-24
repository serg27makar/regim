import { Component, OnInit } from '@angular/core';
import {Tab2DataService} from '../../service/tab2-data.service';
import {DataService} from '../../../service/data.service';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss'],
})
export class ConsumptionComponent implements OnInit {

  private sum;
  private state: any = {
    income: [],
    consumption: [],
    balance: [],
    payments: [],
    scheduled: [],
  };
  constructor(
    private tab2DataService: Tab2DataService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.updateState();
  }

  updateState() {
    this.dataService.itemAll();
    setTimeout(() => {
      this.state = this.tab2DataService.getData();
      console.log(this.state);
    }, 500);
  }

  addItem(sum) {
    let item: any = {
      name: 'consumption',
      sum: sum,
      state: this.state.balance,
      details: 'this.details'
    };
    this.dataService.itemIns(item);
    this.updateState();
    this.sum = null;
  }

}

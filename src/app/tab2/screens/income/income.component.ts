import { Component, OnInit } from '@angular/core';
import {Tab2DataService} from '../../service/tab2-data.service';
import {DataService} from '../../../service/data.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  private sum ;
  private state: any = {
    income: [],
    consumption: [],
    balance: [],
    payments: [],
    scheduled: [],
  };
  constructor(
    private tab2DataService: Tab2DataService,
    private dataService: DataService
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
      name: 'income',
      sum: sum,
      state: this.state.balance,
      details: 'this.details'
    };
    this.dataService.itemIns(item);
    this.updateState();
    this.sum = null;
  }
}

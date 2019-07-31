import {Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';
import {DataService} from '../../service/data.service';
import {Tab2DataService} from '../../tab2/service/tab2-data.service';


@Component({
  selector: 'turnoverModal',
  templateUrl: 'turnover.modal.html',
})
export class TurnoverModal implements OnInit {

  sum;
  screenName;
  private state: any = {
    income: [],
    consumption: [],
    balance: [],
    payments: [],
    scheduled: [],
  };

  constructor(
    private params: NavParams,
    private modalCtrl: ModalController,
    private tab2DataService: Tab2DataService,
    private dataService: DataService
  ) {
    this.screenName = this.params.get('name');
  }

  ngOnInit() {
  }

  chancelPress() {
    this.modalCtrl.dismiss();
  }

  addItem(sum) {
    let item: any = {
      name: this.screenName,
      sum: sum,
      state: this.state.balance,
      details: 'this.details'
    };
    this.dataService.itemIns(item);
    this.modalCtrl.dismiss();
    this.sum = null;
  }
}

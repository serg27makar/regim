import { Component, OnInit } from '@angular/core';
import {Tab2DataService} from '../../service/tab2-data.service';
import {DataService} from '../../../service/data.service';
import {ModalController} from 'ionic-angular';
import {Modal} from '../modal/modal';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss'],
  providers: [ModalController]
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
    public modalCtrl: ModalController,
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

  openModal(characterNum) {
    let modal = this.modalCtrl.create(Modal, characterNum);
    modal.present();
  }
}

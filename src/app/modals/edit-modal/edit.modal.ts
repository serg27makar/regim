import {Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';
import {DataService} from '../../service/data.service';
import {Tab2DataService} from '../../tab2/service/tab2-data.service';


@Component({
  selector: 'editModal',
  templateUrl: 'edit.modal.html',
})
export class EditModal implements OnInit {
  oneitem;
  /*private state: any = {
    income: [],
    consumption: [],
    balance: [],
    payments: [],
    scheduled: [],
  };*/

  constructor(
    private params: NavParams,
    private modalCtrl: ModalController,
    private tab2DataService: Tab2DataService,
    private dataService: DataService
  ) {
    this.oneitem = this.params.data;
    console.log(this.oneitem._id);
  }

  ngOnInit() {
  }

  chancelPress() {
    this.modalCtrl.dismiss();
  }

  upDateItem() {
    let item: any = {
      id: this.oneitem._id,
      name: this.oneitem.name,
      sum: this.oneitem.sum,
      state: "state",   //this.oneitem.state,
      details: 'this.details'
    };
    console.log(item)
    this.dataService.itemDell(item.id);
    this.modalCtrl.dismiss();
  }
}

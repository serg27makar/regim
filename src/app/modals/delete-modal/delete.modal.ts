import {Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';
import {DataService} from '../../service/data.service';
import {Tab2DataService} from '../../tab2/service/tab2-data.service';


@Component({
  selector: 'deleteModal',
  templateUrl: 'delete.modal.html',
})
export class DeleteModal {
  oneitem;
  constructor(
    private params: NavParams,
    private modalCtrl: ModalController,
    private tab2DataService: Tab2DataService,
    private dataService: DataService
  ) {
    this.oneitem = this.params.data;
  }

  chancelPress() {
    this.modalCtrl.dismiss();
  }

  deleteItem() {
    this.dataService.itemDell(this.oneitem._id);
    this.modalCtrl.dismiss();
  }
}

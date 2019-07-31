import { Component, OnInit } from '@angular/core';
import {Tab2DataService} from '../../service/tab2-data.service';
import {DataService} from '../../../service/data.service';
import {TurnoverModal} from '../../../modals/turnover/turnover.modal';
import {ModalController} from '@ionic/angular';
import { ModalOptions } from '@ionic/core';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss'],
})
export class ConsumptionComponent implements OnInit {

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

  onModal() {
    let sum = {
      name: 'consumption'
    };
    const modalOptions: ModalOptions = {
      component: TurnoverModal,
      componentProps: sum
    };

    this.modalCtrl.create(modalOptions).then((modal) => {
      modal.onDidDismiss()
        .then(() => {
          this.updateState();
        });
      if (modal) modal.present();
    });
  }

}

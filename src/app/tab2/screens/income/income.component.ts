import { Component, OnInit } from '@angular/core';
import {Tab2DataService} from '../../service/tab2-data.service';
import {DataService} from '../../../service/data.service';
import {ModalController} from '@ionic/angular';
import { TurnoverModal} from '../../../modals/turnover/turnover.modal';
import { ModalOptions } from '@ionic/core';
import {EditModal} from '../../../modals/edit-modal/edit.modal';
import {DeleteModal} from '../../../modals/delete-modal/delete.modal';



@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  gaming: string = "n64";
  os: string;
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
  ) {}

  ngOnInit() {
    this.updateState();
  }

  onModal() {
    let item = {
      name: 'income'
    };
    const modalOptions: ModalOptions = {
      component: TurnoverModal,
      componentProps: item
    };

    this.modalCtrl.create(modalOptions).then((modal) => {
      modal.onDidDismiss()
        .then(() => {
          this.updateState();
        });
      if (modal) modal.present();
    });
  }

  onModalEdit(oneitem) {
    const modalOptions: ModalOptions = {
      component: EditModal,
      componentProps: oneitem
    };

    this.modalCtrl.create(modalOptions).then((modal) => {
      modal.onDidDismiss()
        .then(() => {
          this.updateState();
        });
      if (modal) modal.present();
    });
  }

  onDeleteModal(oneitem) {
    const modalOptions: ModalOptions = {
      component: DeleteModal,
      componentProps: oneitem
    };

    this.modalCtrl.create(modalOptions).then((modal) => {
      modal.onDidDismiss()
        .then(() => {
          this.updateState();
        });
      if (modal) modal.present();
    });
  }


  updateState() {
    this.dataService.itemAll();
    setTimeout(() => {
      this.state = this.tab2DataService.getData();
      console.log(this.state);
    }, 500);
  }
}

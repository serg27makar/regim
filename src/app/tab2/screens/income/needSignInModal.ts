import {Component, OnInit } from '@angular/core';
import { NavParams, ModalController} from '@ionic/angular';


@Component({
  selector: 'needSignInModal',
  templateUrl: 'needSignInModal.html'
})
export class NeedSignInModal implements OnInit {
  constructor(
    private params: NavParams,
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
  }

  okPress() {
    //this.viewCtrl.dismiss();
  }
  chancelPress() {
    //this.viewCtrl.dismiss();
    this.modalCtrl.dismiss();
  }

}

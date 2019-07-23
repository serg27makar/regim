import {Component, OnInit } from '@angular/core'
import { NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class Modal implements OnInit {

  character;
  codtype;

  constructor(
    public navCtrl: NavController,

    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.character = this.params.get('charNum');
    this.codtype = this.params.get('codtype');
  }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

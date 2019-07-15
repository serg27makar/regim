import { Component, OnInit } from '@angular/core';
import {Tab2DataService} from '../../service/tab2-data.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {


  private state: any;
  constructor(
    private tab2DataService: Tab2DataService
  ) { }

  ngOnInit() {
    this.state = this.tab2DataService.getData();
  }

}

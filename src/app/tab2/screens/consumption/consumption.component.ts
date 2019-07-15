import { Component, OnInit } from '@angular/core';
import {Tab2DataService} from '../../service/tab2-data.service';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss']
})
export class ConsumptionComponent implements OnInit {


  private state: any;
  constructor(
    private tab2DataService: Tab2DataService
  ) { }

  ngOnInit() {
    this.state = this.tab2DataService.getData();
  }


}

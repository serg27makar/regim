import { Component, OnInit } from '@angular/core';
import {Tab2DataService} from '../../service/tab2-data.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  private state: any;
  constructor(
    private tab2DataService: Tab2DataService
  ) { }

  ngOnInit() {
    this.state = this.tab2DataService.getData();
  }
}
import {Component, OnInit} from '@angular/core';
import {Tab2DataService} from './service/tab2-data.service';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(
    private tab2DataService: Tab2DataService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.itemAll();
  }

}

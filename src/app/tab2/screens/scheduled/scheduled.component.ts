import { Component, OnInit } from '@angular/core';
import {Tab2DataService} from '../../service/tab2-data.service';

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrls: ['./scheduled.component.scss']
})
export class ScheduledComponent implements OnInit {

  private state: any;
  constructor(
    private tab2DataService: Tab2DataService
  ) { }

  ngOnInit() {
    this.state = this.tab2DataService.getData();
  }

}

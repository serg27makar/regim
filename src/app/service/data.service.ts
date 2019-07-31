import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import {Tab2DataService} from '../tab2/service/tab2-data.service';

@Injectable()

export class DataService implements OnInit {

  private url: string = 'http://192.168.0.120:3001';
  private socket = io('http://192.168.0.120:3001');

  constructor(
    private http: HttpClient,
    private tab2DataService: Tab2DataService,
  ) {}

  ngOnInit() {}

  setData(data: any) {
    return this.http.post(this.url + '/register' , data);
  }

  itemIns(data) {
    let item: any = {
      name: data.name,
      sum: data.sum,
      state: data.state,
      details: data.details
    };
    this.socket.on('insItemSub', () => {});
    this.socket.emit('insItem', item);
    return true;
  }

  itemAll() {
    this.socket.on('allItemSub', (res, err) => {
      this.tab2DataService.setData(res);
      console.log(err);
    });
    this.socket.emit('allItem');
  }

  itemUpdate(data) {
     let item: any = {
       id: data.id,
       name: data.name,
       sum: data.sum,
       state: data.state,
       details: data.details
     };
     this.socket.on('itemUpdateRes', (res, err) => {
       console.log(err);
     });
       this.socket.emit('itemUpdate', item);
   }

   itemDell(data) {
    this.socket.on('itemDellAll', (res, err) => {
     console.log(err);
   });
    this.socket.emit('itemDell', data);
   }


 /* findUser(user, call) {
    this.socket.on('allFindUser', (res, err) => {
      call(res);
      console.log(err);
    });
    this.socket.emit('findUser', user);
  }*/

 /* findDouble(user, call) {
   this.socket.on('allFindDouble', (res, err) => {
    call(res);
    console.log(err);
   });
   this.socket.emit('findDouble', user);
  }*/

 /* findUserDep(user, call) {
   this.socket.on('allFindUserDep', (res, err) => {
    call(res);
    console.log(err);
  });
   this.socket.emit('findUserDep', user);
  }*/
}

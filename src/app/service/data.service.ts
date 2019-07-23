import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import {Tab2DataService} from '../tab2/service/tab2-data.service';

@Injectable()

export class DataService implements OnInit {

  private url: string = 'http://localhost:3001';
  private socket = io('http://localhost:3001');

  constructor(
    private http: HttpClient,
    private tab2DataService: Tab2DataService,
  ) {}

  ngOnInit() {}

  /* ------------------ */

  setData(data: any) {
    return this.http.post(this.url + '/register' , data);
  }

  /* ------------------ */

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

  /* userUpdate(data) {
     let item: any = {
       name: data.name,
       sum: data.sum,
       state: data.state,
       details: data.details
     };
     this.socket.on('userUpdateRes', (res, err) => {
       console.log(err);
     });
       this.socket.emit('userUpdate', item);
   }*/

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

 /* userDell(data) {
   this.socket.on('allUserDell', (res, err) => {
    console.log(err);
  });
   this.socket.emit('userDell', data);
  }*/

}

import {Injectable, OnInit} from '@angular/core';
// import * as io from  'socket.io-client';
import {Observable} from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx'

import { HttpClient } from '@angular/common/http';
import openSocket from 'socket.io-client';


@Injectable()

export class DataService implements OnInit {

  private url: string = 'http://localhost:3001';
  private socket = openSocket('http://localhost:3001');


  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {}

  setData(data: any) {
    return this.http.post(this.url + '/register' , data);
  }


  userIns(data) {
    let user = {
      userName: data.userName,
      department: data.department,
      notes: data.notes,
    };

    this.socket.on('userInsRes', (res, err) => {
      console.log(res);
    });
    this.socket.emit('userIns', user);
  }

  userUpdate(data) {
    let user = {
      userId: data.userId,
      userName: data.userName,
      department: data.department,
      notes: data.notes,
    };
    this.socket.on('userUpdateRes', (res, err) => {
      console.log(err);
    });
      this.socket.emit('userUpdate', user);
  }

  usersAll(call) {
     this.socket.on('usersAllRes', (res, err) => {
       call(res);
       console.log(err);
     });
     this.socket.emit('usersAll');
  }

  findUser(user, call) {
    this.socket.on('allFindUser', (res, err) => {
      call(res);
      console.log(err);
    });
    this.socket.emit('findUser', user);
  }

  findDouble(user, call) {
   this.socket.on('allFindDouble', (res, err) => {
    call(res);
    console.log(err);
   });
   this.socket.emit('findDouble', user);
  }

  findUserDep(user, call) {
   this.socket.on('allFindUserDep', (res, err) => {
    call(res);
    console.log(err);
  });
   this.socket.emit('findUserDep', user);
  }

  userDell(data) {
   this.socket.on('allUserDell', (res, err) => {
    console.log(err);
  });
   this.socket.emit('userDell', data);
  }


}

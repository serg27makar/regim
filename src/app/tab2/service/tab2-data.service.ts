import {Injectable} from '@angular/core';

@Injectable()
export class Tab2DataService {

  private income = [];
  private consumption = [];
  private balance = [];
  private payments = [];
  private scheduled = [];

  constructor() {}

  getData(): string[] {
    let data: any = {
      income: this.income,
      consumption: this.consumption,
      balance: this.balance,
      payments: this.payments,
      scheduled: this.scheduled,
    };
    return data;
  }

  setData(newData) {
    this.cleareData();
    newData.map((item) => {
      this.addData(item.name, item);
    });
  }

  cleareData() {
    this.income = [];
    this.consumption = [];
    this.balance = [];
    this.payments = [];
    this.scheduled = [];
  }

  addData(name: string, val: any) {
    switch (name) {
      case 'income':
        this.income.unshift(val);
        break;

      case 'consumption':
        this.consumption.unshift(val);
        break;

      case 'balance':
        this.balance.unshift(val);
        break;

      case 'payments':
        this.payments.unshift(val);
        break;

      case 'scheduled':
        this.scheduled.unshift(val);
        break;

      default:
       console.log("defolt val",name, val);
    }
  }
}

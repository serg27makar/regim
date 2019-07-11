import {Injectable} from '@angular/core';

@Injectable()
export class Tab2DataService {

  private income = [ "400", "7800",  "500", "300"];
  private consumption = [ "100", "100",  "250", "50"];
  private balance = [ "8500"];
  private payments = [ "3500", "500",  "240"];
  private scheduled = [ "200" ];

  constructor() {}

  getData(): string[] {
    let data: any = {
      income: this.income,
      consumption: this.consumption,
      balance: this.balance,
      payments: this.payments,
      scheduled: this.scheduled,
    };
    console.log(data);
    return data;
  }
  addData(name: string, val: any) {
    switch (name) {
      case 'income':
        this.income.push[val];
        break;

      case 'consumption':
        this.consumption.push[val];
        break;

      case 'balance':
        this.balance.push[val];
        break;

      case 'payments':
        this.payments.push[val];
        break;

      case 'scheduled':
        this.scheduled.push[val];
        break;

      default:
       console.log(name, val);
    }
  }
}

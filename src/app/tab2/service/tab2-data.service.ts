import {Injectable} from '@angular/core';
import {JsonParseMode, JsonParserContext} from '@angular-devkit/core';

@Injectable()
export class Tab2DataService {

  private income = ['400','7800','500','300'];
  private consumption = [ "100", "100",  "250", "50"];
  private balance = [ "8500"];
  private payments = [ "3500", "500",  "240"];
  private scheduled = [ "200" ];

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }
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
        console.log(name, val);
        this.income.push(val);
        console.log(this.income);
        break;

      case 'consumption':
        this.consumption.push(val);
        break;

      case 'balance':
        this.balance.push(val);
        break;

      case 'payments':
        this.payments.push(val);
        break;

      case 'scheduled':
        this.scheduled.push(val);
        break;

      default:
       console.log("defolt val",name, val);
    }
  }

  fakeValidateUserData() {
    return ({
      userDate1: 1,
      userData2: 2
    });
  }

  //

/*
  dynamicDownloadTxt() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'My Report',
        text: JSON.stringify(res)
      });
    });

  }*/

  dynamicDownloadJson() {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'My Report.json',
        text: JSON.stringify( this.fakeValidateUserData())
      });
  }

  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }


}

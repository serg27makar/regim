import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'backtimer',
  templateUrl: 'back.timer.html',
})

export class BackTimer {
  @Input() units: any;
  @Input() end: any;
  @Input() displayString: string = '';
  @Input() text: any;
  @Input() divider: any;
  @Output() reached: EventEmitter<Date> = new EventEmitter();
  display: any = [];
  displayNumbers: any = [];

  private wasReached = false;

  constructor() {
    setInterval(() => this._displayString(), 100);
  }

  _displayString() {

    if (typeof this.units === 'string') {
      this.units = this.units.split('|');
    }

    let givenDate: any = new Date(1656132451 * 1000);     // < hard date
    // let givenDate: any = new Date(this.end);                 // < usually value
    let now: any = new Date();

    let dateDifference: any = givenDate - now;

    if (dateDifference < 100 && dateDifference > 0 && !this.wasReached) {
      this.wasReached = true;
      this.reached.next(now);
    }

    let lastUnit = this.units[this.units.length - 1],
      unitConstantForMillisecs = {
        year: (((1000 * 60 * 60 * 24 * 7) * 4) * 12),
        month: ((1000 * 60 * 60 * 24 * 7) * 4),
        weeks: (1000 * 60 * 60 * 24 * 7),
        days: (1000 * 60 * 60 * 24),
        hours: (1000 * 60 * 60),
        minutes: (1000 * 60),
        seconds: 1000
      },
      unitsLeft = {},
      returnText = '',
      returnNumbers = '',
      totalMillisecsLeft = dateDifference,
      i,
      unit: any;
    for (i in this.units) {
      if (this.units.hasOwnProperty(i)) {

        unit = this.units[i].trim();
        if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
          throw new Error('Cannot repeat unit: ' + unit);
        }
        if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
          throw new Error('Unit: ' + unit + ' is not supported. Please use following units: year, month, weeks, days, hours, minutes, seconds, milliseconds');
        }

        unitsLeft[unit] = totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];

        if (lastUnit === unit) {
          unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
        } else {
          unitsLeft[unit] = Math.floor(unitsLeft[unit]);
        }
        totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];
        unitConstantForMillisecs[unit.toLowerCase()] = false;

        if(Number(unitsLeft[unit]) <= 9){
          returnNumbers += ' ' + '0' + unitsLeft[unit] + ' | ';
        }else {
          returnNumbers += ' ' + unitsLeft[unit] + ' | ';
        }
        returnText += ' ' + unit;
      }
    }

    if (this.text === null || !this.text) {
      this.text = {
        Year: 'Year',
        Month: 'Month',
        Weeks: 'Weeks',
        Days: 'Days',
        Hours: 'Hours',
        Minutes: 'Minutes',
        Seconds: 'Seconds',
        MilliSeconds: 'Milliseconds'
      };
    }

    this.displayString = returnText
      .replace('Year', this.text.Year + ' | ')
      .replace('Month', this.text.Month + ' | ')
      .replace('Weeks', this.text.Weeks + ' | ')
      .replace('Days', this.text.Days + ' | ')
      .replace('Hours', this.text.Hours + ' | ')
      .replace('Minutes', this.text.Minutes + ' | ')
      .replace('Seconds', this.text.Seconds);

    this.displayNumbers = returnNumbers.split('|');
    this.display = this.displayString.split('|');
  }
}

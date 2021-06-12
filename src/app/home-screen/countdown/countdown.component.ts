import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ASENKA_BACK_DATETIME } from '../../../constants';
import { DateRange } from '../../../interfaces/date-range';

interface DateTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  @Input() endDate!: Date;

  public datetimeLeft!: DateTime;

  private countdownProcess: any;
  private readonly millisecondNumber: DateTime = {
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000
  };

  public ngOnInit(): void {
    this.datetimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    const countdownUpdateInterval = 1000;
    this.countdownProcess = setInterval(this.recountTimeValues.bind(this), countdownUpdateInterval);
  }

  public ngOnDestroy(): void {
    clearInterval(this.countdownProcess);
  }

  private recountTimeValues(): void {
    let delta: number = this.endDate.getTime() - Date.now();

    // Full days left
    const days = Math.floor(delta / this.millisecondNumber.days);
    this.datetimeLeft.days = days;
    delta -= days * this.millisecondNumber.days;

    // Full hours left
    const hours = Math.floor(delta / this.millisecondNumber.hours);
    this.datetimeLeft.hours = hours;
    delta -= hours * this.millisecondNumber.hours;

    // Full minutes left
    const minutes = Math.floor(delta / this.millisecondNumber.minutes);
    this.datetimeLeft.minutes = minutes;
    delta -= minutes * this.millisecondNumber.minutes;

    // Full seconds left
    this.datetimeLeft.seconds = Math.floor(delta / this.millisecondNumber.seconds);
  }
}

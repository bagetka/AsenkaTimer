import { Component } from '@angular/core';
import { ASENKA_BACK_DATETIME, ASENKA_START_DATETIME } from '../../constants';
import { DateRange } from '../../interfaces/date-range';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  public endDate: Date = ASENKA_BACK_DATETIME;
  public startDate: Date = ASENKA_START_DATETIME;
  public dateRange!: DateRange;

  constructor() {
    this.dateRange = {
      startDate: this.startDate,
      endDate: this.endDate
    };
  }
}

import { Component } from '@angular/core';
import { ASENKA_BACK_DATETIME, ASENKA_KLAGENFURT_LEAVE_DATETIME, ASENKA_START_DATETIME } from '../../constants';
import { CountdownOptions } from '../../interfaces/countdown-options';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  public countdownOptions!: CountdownOptions;

  private options!: CountdownOptions[];
  private index = 0;

  constructor() {
    this.initOptions();

    this.countdownOptions = this.options[0];
  }

  public switchCountdownOptions(): void {
    switch (this.index) {
      case 0:
        this.index = 1;
        break;
      case 1:
        this.index = 0;
        break;
    }

    this.countdownOptions = this.options[this.index];
  }

  private initOptions(): void {
    this.options = [
      {
        dateRange: {
          startDate: ASENKA_START_DATETIME,
          endDate: ASENKA_BACK_DATETIME
        },
        title: 'Asenka is back in'
      },
      {
        dateRange: {
          startDate: ASENKA_START_DATETIME,
          endDate: ASENKA_KLAGENFURT_LEAVE_DATETIME
        },
        title: 'Bye-bye Klagenfurt'
      }
    ];
  }
}

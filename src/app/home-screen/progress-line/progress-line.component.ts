import { Component, ViewEncapsulation } from '@angular/core';
import { ASENKA_BACK_DATETIME, ASENKA_START_DATETIME } from '../../../constants';

@Component({
  selector: 'app-progress-line',
  templateUrl: './progress-line.component.html',
  styleUrls: ['./progress-line.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressLineComponent {
  private fullTime: number = ASENKA_BACK_DATETIME.getTime() - ASENKA_START_DATETIME.getTime();
  private timeLeft: number = Date.now() - ASENKA_START_DATETIME.getTime();
  public progressValue: number;

  constructor() {
    const maxBarValue = 100;
    this.progressValue = (this.timeLeft / this.fullTime) * maxBarValue;
  }

  public roundValue(value: number, roundRate: number = 10): number {
    return Math.round(value * roundRate) / roundRate;
  }
}

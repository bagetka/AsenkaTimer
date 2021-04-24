import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ASENKA_BACK_DATETIME, ASENKA_START_DATETIME } from '../../../constants';

@Component({
  selector: 'app-progress-line',
  templateUrl: './progress-line.component.html',
  styleUrls: ['./progress-line.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressLineComponent implements OnInit, OnDestroy {

  public progressValue!: number;

  private readonly fullTime: number = ASENKA_BACK_DATETIME.getTime() - ASENKA_START_DATETIME.getTime();
  private readonly maxBarValue = 100;
  private countdownProcess: any;

  private timeLeft = (): number => Date.now() - ASENKA_START_DATETIME.getTime();

  public ngOnInit() {
    const labelUpdateInterval = 30;
    this.countdownProcess = setInterval(this.updateProgressValue.bind(this), labelUpdateInterval);
  }

  public ngOnDestroy(): void {
    clearInterval(this.countdownProcess);
  }

  private updateProgressValue(): void {
    this.progressValue = (this.timeLeft() / this.fullTime) * this.maxBarValue;
  }
}

import { Component, OnInit, OnDestroy, ViewEncapsulation, Input } from '@angular/core';
import { DateRange } from '../../../interfaces/date-range';

@Component({
  selector: 'app-progress-line',
  templateUrl: './progress-line.component.html',
  styleUrls: ['./progress-line.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressLineComponent implements OnInit, OnDestroy {

  @Input() dateRange!: DateRange;
  @Input() labelUpdateInterval = 30;

  public progressValue!: number;

  private readonly maxBarValue = 100;

  private fullTime!: number;
  private countdownProcess: any;

  public ngOnInit() {
    this.fullTime = this.dateRange.endDate.getTime() - this.dateRange.startDate.getTime();
    this.countdownProcess = setInterval(this.updateProgressValue.bind(this), this.labelUpdateInterval);
  }

  public ngOnDestroy(): void {
    clearInterval(this.countdownProcess);
  }

  private updateProgressValue(): void {
    const timeLeft = Date.now() - this.dateRange.startDate.getTime();
    this.progressValue = (timeLeft / this.fullTime) * this.maxBarValue;
  }
}

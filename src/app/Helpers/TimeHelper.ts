const MILLISECOND_IN_MINUTE = 60000;
const MINUTES_IN_HOUR = 60;
const MINSK_TIMEZONE_OFFSET = 3;

export class TimeHelper {
  public static getMinskTime(): number {
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * MILLISECOND_IN_MINUTE);

    return new Date(utc + (MILLISECOND_IN_MINUTE * MINUTES_IN_HOUR * MINSK_TIMEZONE_OFFSET)).getTime();
  }
}

import { Moment } from 'moment';
import { DateFormat } from '../const';


class DateConverter {

  static dayToYear(date: Moment | string): string {
    if (this.isMoment(date)) {
      return date.format(DateFormat.DayMonthYear);
    }
    return date.replace(/(\d{4})(\d{2})(\d{2})/, (_m, p1, p2, p3) => {
      return `${p3}${p2}${p1}`;
    });
  }

  static yearToDate(date: Moment | string): string {
    if (this.isMoment(date)) {
      return date.format(DateFormat.YearMonthDay);
    }
    return date.replace(/(\d{2})(\d{2})(\d{4})/, (_m, p1, p2, p3) => {
      return `${p3}${p2}${p1}`
    });
  }

  static dayToYearDivider (date: string) {
    return date.replace(/(\d{2})(\d{2})(\d{4})/, (_m, p1, p2, p3) => {
      return `${p1}.${p2}.${p3}`;
    });
  }

  private static isMoment(date: Moment | string): date is Moment {
    return (date as Moment).date !== undefined;
  }
}

export default DateConverter;

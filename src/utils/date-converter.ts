import { Moment } from 'moment';

const DAY_TO_YEAR_FORMAT = 'DDMMYYYY';
const YEAR_TO_DAY_FORMAT = 'YYYYMMDD';

class DateConverter {
  static dayToYear(date: Moment): string {
    return date.format(DAY_TO_YEAR_FORMAT);
  }

  static yearToDate(date: Moment): string {
    return date.format(YEAR_TO_DAY_FORMAT);
  }
}

export default DateConverter;

/* eslint-disable no-plusplus */
import moment from 'moment';
import 'moment-timezone';



export const Formatter = {



  formatTime(time, format = 'YYYY-MM-DD, HH:mm:ss') {
    const dateTime = moment(time).utcOffset(`+09:00`);
    return dateTime.format(format);
  },
  formatTime2(time) {
    const newTime = time?.split(' ').join(', ');
    const timeReturn = newTime.substring(0, newTime.length - 2);
    return timeReturn;
  },
  fDateStringWithoutDelimiter(dateWithoutDelimiter) {
    if (!dateWithoutDelimiter) return '';
    const year = dateWithoutDelimiter.slice(0, 4);
    const month = dateWithoutDelimiter.slice(4, 6);
    const day = dateWithoutDelimiter.slice(6);
    return `${year}-${month}-${day}`;
  },
  fKrPhone(phoneNumber) {
    const cleaned = `${phoneNumber}`.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  },
};

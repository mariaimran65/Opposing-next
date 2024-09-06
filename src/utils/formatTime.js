import moment from 'moment';

export function fDate(date) {
  return moment(date).format('MMMM d,  yyyy');
}

export function fDateTime(date) {
  return moment(date).format('dd MMM yyyy HH:mm');
}

import moment from 'moment';
import { festivalTime } from '../data';

function getCurrentTime() {
  return moment.now();
}

function getCelebrationTime() {
  return moment(festivalTime).valueOf();
}

function getAvailableTime() {
  return getCelebrationTime() - getCurrentTime();
}

const time = { getCurrentTime, getCelebrationTime, getAvailableTime };
export default time;

import moment from 'moment';
import data from '../data';

function getCurrentTime() {
  return moment.now();
}

function getCelebrationTime() {
  const target = data.celebrationTime;
  return moment(target).valueOf();
}

function getAvailableTime() {
  return getCelebrationTime() - getCurrentTime();
}



export default { getCurrentTime, getCelebrationTime, getAvailableTime };

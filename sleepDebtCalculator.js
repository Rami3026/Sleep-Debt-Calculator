getSleepHours = day => {
if (day === 'monday') {
    return 8;
  } 
console.log(getSleepHours('tuesday')); // should print the # hours assigned to tuesday
};
const getActualSleepHours = () => {
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
};
const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();};


console.log(getIdealSleepHours());

const caculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
console.log('You have got the perfect amount of sleep.');}
if (actualSleepHours > idealSleepHours) {
console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');};
if (actualSleepHours < idealSleepHours) {
console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more than you needed this week. Well Done.');};
};





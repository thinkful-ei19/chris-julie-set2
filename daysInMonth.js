const ERROR_MESSAGE = 'Must provide a valid month.';

const formatter = (month, days) => { 
  return `${month} has ${days} days.`;
};

// month (string) and leapYear (boolean, optional) 
// @example: 'January has 31 days'
// @params: month {String}
// @params: leapYear {Boolean}
const printNumofDays = (month, leapYear=false) => {
  switch(month) {
    case 'february':
      if (leapYear){
          console.log(formatter(month, 29)); 
        } else {
          console.log(formatter(month, 28));
        }
      break;
      
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      console.log(formatter(month, 31));
      break;  
      
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      console.log(formatter(month, 30));
      break; 
      
    default: 
      throw new Error(ERROR_MESSAGE); 
  } 
};

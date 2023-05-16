function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result;
  if (someValue <= 400) {
    result = 'This one is on me!';
  } else if (someValue > 400 && someValue < 2000) {
    result = 'That will be twenty bucks.';
  } else if (someValue > 2000 && someValue <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500) {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  let result;
  if (city == 'NYC') {
    result = 'Ok, sounds good.';
  } else if (city != 'NYC') {
    result = 'No go.';
  }
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let result;
  if (tip == 'generous') {
    result = 'Thank you so much.';
  } else if (tip == 'not as generous') {
    result = 'Thank you.';
  } else if (tip == 'thanks for everything') {
    result = 'Bye.';
  }
  return result;
}
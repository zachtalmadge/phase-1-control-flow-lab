function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return 'This one is on me!'
  } else if (distance >= 400 && distance <= 2000){
    return 'That will be twenty bucks.'
  } else if (distance > 2500){
    return 'No can do.'
  } else {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let result = ''

  switch (tip){
    case "generous":
      result = 'Thank you so much.'
      break;

    case 'not as generous':
      result = 'Thank you.'
      break;
    case 'thanks for everything':
      result = 'Bye.'
      break;
  }

  return result;
}
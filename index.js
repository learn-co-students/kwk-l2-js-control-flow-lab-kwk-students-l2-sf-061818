function scuberGreetingForFeet (ride) {
  if (ride<=400) {
    return "This one is on me!"
  }
  else if (ride>2000 && ride<=2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(generosity) {
  if (generosity === "generous") {
    return "Thank you so much."
  }
  else if (generosity === "not as generous") {
    return "Thank you."
  }
  else {
    return "Bye."
  }
  
}
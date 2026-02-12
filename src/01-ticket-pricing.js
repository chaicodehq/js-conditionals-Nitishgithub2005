/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  var cost = 0
  var child = age>= 0 & age <= 12
  var teens = age>=13 & age <= 17
  var adults = age>=18 & age <=59
  var seniors = age >= 60 
  if (child) {
    cost = 8
  }
  else if (teens){
    cost = 12
  }
  else if (adults){
    cost = 15
  }
  else if(seniors){
    cost = 10
  }
  else{
    cost = -1
  }
  if(isWeekend & age >=0){
    cost+=3
  }
  else{
    cost = cost
  }
  return cost
}

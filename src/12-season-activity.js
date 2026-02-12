/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  var temp = temperature
  var season =""
  const result ={
    season:"",
    activity:""
  }
  if( month <=0  || month >12) return null
  season = (month == 12 || month ==1 || month ==2) ? "Winter" :"" 
  season = (month >=3 && month <=5) ? "Spring" :season 
  season =  (month >=6 && month <=8) ? "Summer" :season
  season = (month >=9 && month <=11) ? "Autumn" :season
  if(season == "Winter"){
    if(temp < 0){
      result.season = "Winter"
      result.activity="skiing"
    }
    else if(temp >= 0) {
      result.season="Winter"
      result.activity="ice skating"
    }
  }

  else if(season == "Spring" ){
    if(temp > 20){
      result.season="Spring"
      result.activity="hiking"
    }
    else if(temp <= 20){
      result.season="Spring"
      result.activity="museum visit"
    }
  }
  else if(season == "Summer"){
    if(temp > 35){
      result.season="Summer"
      result.activity="swimming"
    }
    else if(temp <= 35){
      result.season="Summer"
      result.activity="cycling"
    }
  }
  else if(season == "Autumn"){
    if(temp > 15){
      result.season="Autumn"
      result.activity="nature walk"
    }
    else if(temp <= 15){
      result.season="Autumn"
      result.activity="reading at a cafe"
    }
  }
  return result
}

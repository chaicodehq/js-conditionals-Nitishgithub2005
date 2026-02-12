/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  // Your code here
  var msg = "";
  switch(color.toLowerCase()){
    case "green" : 
      msg = "GO";
      break;
    case "yellow" : 
      msg = "SLOW DOWN";
      break;
    case "red" : 
      msg = "STOP";
      break;
    case "flashing red" : 
      msg = "STOP AND PROCEED WITH CAUTION";
      break;
    default : 
      msg = "INVALID SIGNAL";
  }
  return msg;
}

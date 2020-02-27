"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentTime = currentTime;
exports.convertToString = convertToString;

function currentTime() {
  var date = new Date(); // Return time in UTC !!!

  return `${date.getHours() + 7}:${date.getMinutes()}`;
}

function convertToString(number) {
  return number.toString();
}
//# sourceMappingURL=time.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _time = require("../../utils/time");

var _default = {
  GetCurrentTimeIntent: function GetCurrentTimeIntent(conv) {
    conv.close(`Alright, your current time is ${(0, _time.currentTime)()}`);
  }
};
exports.default = _default;
//# sourceMappingURL=templates.js.map
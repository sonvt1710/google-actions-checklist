"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _start = require("./start");

Object.keys(_start).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _start[key];
    }
  });
});
//# sourceMappingURL=index.js.map
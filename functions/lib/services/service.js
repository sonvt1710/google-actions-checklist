"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = _interopRequireDefault(require("./internal"));

var _ssp = _interopRequireDefault(require("./ssp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ServiceClient {
  constructor(userId, sessionId, client) {
    if (client === 'ssp') {
      this.client = new _ssp.default(userId, sessionId);
    } else {
      this.client = new _internal.default(userId, sessionId);
    }
  }

}

exports.default = ServiceClient;
//# sourceMappingURL=service.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Internal {
  constructor(userId, sessionId) {
    this.userInfo.id = userId;
    this.userInfo.session = sessionId;
  }

  async getUserInfo() {
    // This will call to SSP to send OTP to device
    this.userInfo = _objectSpread({}, this.userInfo, {
      fullName: 'Test'
    });
  }

  async sendOTP() {
    // This will call to SSP to send OTP to device
    this.userInfo.otp = '111111';
  }

  async verifyOTP() {
    // This will call to SSP to send OTP to device
    this.token = 'Test Token';
    return true;
  }

  async getChecklist() {
    if (!this.token) {
      return [];
    }

    this.checkList = [{
      id: 'this_is_first',
      index: 0,
      status: Status.Yes,
      read: false
    }];
    return this.checkList;
  }

  async updateTask(id, status) {
    this.checkList.map(task => {
      const newTask = _objectSpread({}, task);

      if (task.id === id) {
        if (status) {
          newTask.status = status === 'yes' ? Status.Yes : Status.No;
        }

        newTask.read = true;
      }

      return newTask;
    });
  }

}

exports.default = Internal;
//# sourceMappingURL=ssp.js.map
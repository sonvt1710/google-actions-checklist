"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeJsonDb = require("node-json-db");

var _JsonDBConfig = require("node-json-db/dist/lib/JsonDBConfig");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Internal {
  constructor(userId, sessionId) {
    this.userInfo.id = userId;
    this.userInfo.session = sessionId;
    this.client = new _nodeJsonDb.JsonDB(new _JsonDBConfig.Config('myDataBase', true, false, '/'));
    this.client.push('/user', {
      id: 'abcdef',
      fullName: 'SonVT'
    });
  }

  async createUser(userInfo) {
    this.client.push('/user', userInfo);
  }

  async getUserInfo() {
    try {
      this.userInfo = this.client.getData(`${this.userInfo.id}`);
      return this.userInfo;
    } catch (error) {
      return {};
    }
  }

  async sendOTP() {
    this.userInfo.otp = '111111';
  }

  async verifyOTP() {
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
//# sourceMappingURL=internal.js.map
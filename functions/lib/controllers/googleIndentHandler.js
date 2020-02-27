"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionsOnGoogle = require("actions-on-google");

var _googleActions = _interopRequireDefault(require("../intentHandlers/googleActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** ******************************************************************************* */

/** ******************************Google Assistant********************************* */

/** **********************************************+++++++++++++++++++++++++++++++++*/
// Run the proper function handler based on the matched Dialogflow intent name
const app = (0, _actionsOnGoogle.dialogflow)({
  debug: true
}); // base intent

app.intent('Default Welcome Intent', conv => {
  conv.ask('What your user id?');
  conv.followup('AskUserID');
});
app.intent('Goodbye', conv => {
  conv.close('See you later!');
});
app.intent('Default Fallback Intent', conv => {
  conv.ask('I didn\'t understand. Can you tell me something else?');
});
Object.entries(_googleActions.default).forEach(([intent, intentHandler]) => {
  app.intent(intent, intentHandler);
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=googleIndentHandler.js.map
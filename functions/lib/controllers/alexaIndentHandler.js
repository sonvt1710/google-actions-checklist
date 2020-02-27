"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Alexa = _interopRequireWildcard(require("ask-sdk"));

var intentHandlers = _interopRequireWildcard(require("../intentHandlers/alexaSkills"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** ******************************************************************************* */

/** ******************************Alexa Skill************************************** */

/** **********************************************+++++++++++++++++++++++++++++++++*/
// const ErrorHandler = {
//   canHandle(): boolean {
//     return true;
//   },
//   handle(handlerInput, error: Error) {
//     console.log(`Error handled: ${error.message}`);
//     return handlerInput.responseBuilder
//       .speak('Sorry, I can\'t understand the command. Please say again.')
//       .reprompt('Sorry, I can\'t understand the command. Please say again.')
//       .getResponse();
//   },
// };
async function handler(request, response) {
  console.log('--------------------', request, response);
  const requestHandlers = [];
  Object.values(intentHandlers).forEach(value => {
    requestHandlers.push(value);
  });
  return Alexa.SkillBuilders.custom().addRequestHandlers(...requestHandlers).lambda();
}

var _default = handler;
exports.default = _default;
//# sourceMappingURL=alexaIndentHandler.js.map
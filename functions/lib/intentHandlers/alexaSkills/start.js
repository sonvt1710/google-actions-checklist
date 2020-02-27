"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionEndedRequestHandler = exports.CancelAndStopIntentHandler = exports.HelpIntentHandler = exports.GetCurrentTimeIntent = exports.LaunchRequestHandler = void 0;

var _time = require("../../utils/time");

// import ask-sdk-core
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },

  handle(handlerInput) {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';
    console.log('-++++++++++++++++++++++', handlerInput);
    return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).withSimpleCard('Ask Time', speechText).getResponse();
  }

};
exports.LaunchRequestHandler = LaunchRequestHandler;
const GetCurrentTimeIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },

  handle(handlerInput) {
    const speechText = `${(0, _time.currentTime)()}`;
    return handlerInput.responseBuilder.speak(speechText).withSimpleCard('Ask Time', speechText).getResponse();
  }

};
exports.GetCurrentTimeIntent = GetCurrentTimeIntent;
const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },

  handle(handlerInput) {
    const speechText = 'You can say hello to me!';
    return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).withSimpleCard('Hello World', speechText).getResponse();
  }

};
exports.HelpIntentHandler = HelpIntentHandler;
const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },

  handle(handlerInput) {
    const speechText = 'Goodbye!';
    return handlerInput.responseBuilder.speak(speechText).withSimpleCard('Hello World', speechText).getResponse();
  }

};
exports.CancelAndStopIntentHandler = CancelAndStopIntentHandler;
const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },

  handle(handlerInput) {
    // any cleanup logic goes here
    return handlerInput.responseBuilder.getResponse();
  }

};
exports.SessionEndedRequestHandler = SessionEndedRequestHandler;
//# sourceMappingURL=start.js.map
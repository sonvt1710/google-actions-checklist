/** ******************************************************************************* */
/** ******************************Alexa Skill************************************** */
/** **********************************************+++++++++++++++++++++++++++++++++*/

import * as Alexa from 'ask-sdk';

import * as intentHandlers from '../intentHandlers/alexaSkills';

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
	Object.values(intentHandlers).forEach((value) => {
		requestHandlers.push(value);
	});
	return Alexa.SkillBuilders.custom()
		.addRequestHandlers(
			...requestHandlers,
		)
		.lambda();
}

export default handler;


/** ******************************************************************************* */
/** ******************************Google Assistant********************************* */
/** **********************************************+++++++++++++++++++++++++++++++++*/
import { dialogflow } from 'actions-on-google';
import googleActions from '../intentHandlers/googleActions';

// Run the proper function handler based on the matched Dialogflow intent name

const app = dialogflow({
	debug: true,
});

// base intent
app.intent('Default Welcome Intent', (conv) => {
	conv.ask('What your user id?');
	conv.followup('AskUserID');
});

app.intent('Goodbye', (conv) => {
	conv.close('See you later!');
});

app.intent('Default Fallback Intent', (conv) => {
	conv.ask('I didn\'t understand. Can you tell me something else?');
});

Object.entries(googleActions).forEach(([intent, intentHandler]) => {
	app.intent(intent, intentHandler);
});


export default app;

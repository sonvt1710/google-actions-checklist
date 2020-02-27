import * as functions from "firebase-functions";

import alexaIndentHander from "./controllers/alexaIndentHandler";
import googleIndentHandler from "./controllers/googleIndentHandler";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.dialogflow = functions.https.onRequest(googleIndentHandler);

exports.alexaSkill = functions.https.onRequest(alexaIndentHander);


"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FINAL_FALLBACK = exports.LIST_FALLBACK = void 0;
const LIST_FALLBACK = ["Sorry, what was that?", "I didn't catch that. Please do it again?"];
exports.LIST_FALLBACK = LIST_FALLBACK;
const FINAL_FALLBACK = "I'm sorry I'm having trouble here. Let's talk again later.";
exports.FINAL_FALLBACK = FINAL_FALLBACK;
var _default = {
  UserProvideID: async function UserProvideID(conv, {
    id
  }) {
    console.log('-------------', conv, id);

    if (!conv.data.fallbackCount) {
      conv.data.fallbackCount = 0;
    }

    conv.data.fallbackCount += 1;

    if (conv.data.fallbackCount >= 3) {
      conv.contexts.delete('awaiting_user_id');
      return conv.close('Oops');
    }

    if (!id || id !== '123456') {
      return conv.ask('Please say again');
    } else {
      conv.contexts.delete('awaiting_user_id');
      return conv.close(`Welcome to my world, Maou-Sama`);
    }
  } // UserIDIsIncorrect: async function UserIDIsIncorrect(conv) {
  // 	conv.data.fallbackCount++;
  // 	// Provide two prompts before ending game
  // 	if (conv.data.fallbackCount === 1) {
  // 		conv.contexts.set(DONE_YES_NO_CONTEXT, 5);
  // 		conv.ask('Are you done playing Number Genie?');
  // 	} else {
  // 		conv.close(`Since I'm still having trouble, so I'll stop here. ` +
  // 			`Let’s play again soon.`);
  // 	}
  // }

};
exports.default = _default;
//# sourceMappingURL=auth.js.map
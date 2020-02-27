import { currentTime } from '../../utils/time';

export default {
	GetCurrentTimeIntent: function GetCurrentTimeIntent(conv) {
		conv.close(`Alright, your current time is ${currentTime()}`);
	},
};

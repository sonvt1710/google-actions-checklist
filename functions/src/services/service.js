import InternalClient from './internal';
import SSPClient from './ssp';

export default class ServiceClient {
	constructor(userId, sessionId, client) {
		if (client === 'ssp') {
			this.client = new SSPClient(userId, sessionId);
		} else {
			this.client = new InternalClient(userId, sessionId);
		}
	}
}

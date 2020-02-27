import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

export default class Internal {
	constructor(userId, sessionId) {
		this.userInfo.id = userId;
		this.userInfo.session = sessionId;
		this.client = new JsonDB(new Config('myDataBase', true, false, '/'));
		this.client.push('/user', { id: 'abcdef', fullName: 'SonVT' });
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
			read: false,
		}];
		return this.checkList;
	}

	async updateTask(id, status) {
		this.checkList.map((task) => {
			const newTask = { ...task };
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

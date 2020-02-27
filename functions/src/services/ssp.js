
export default class Internal {
	constructor(userId, sessionId) {
		this.userInfo.id = userId;
		this.userInfo.session = sessionId;
	}

	async getUserInfo(){
		// This will call to SSP to send OTP to device
		this.userInfo = {
			...this.userInfo,
			fullName: 'Test',
		};
	}

	async sendOTP(){
		// This will call to SSP to send OTP to device
		this.userInfo.otp = '111111';
	}


	async verifyOTP() {
		// This will call to SSP to send OTP to device
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

	async updateTask(id, status){
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

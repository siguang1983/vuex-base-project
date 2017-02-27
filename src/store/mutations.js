
export default {

	// 修改侧栏用户名别
	changeSideData(state, sideJson){
		state.sideData.push(sideJson)
	},

	// 切换用户
	switchUserMutation(satate, id){
		satate.currentId = id;
	},

	// 添加内容
	addMessageMutation(state, content){
		debugger;
		state.messsageData[state.currentId].message.push(content);
	}

}
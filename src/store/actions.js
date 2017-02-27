
export const holderSilde = ({commit}, {name, introduce}) =>{
	var side = {
		id: 1,
		name: name,
		introduce: introduce
	}
	
	commit('changeSideData', side)
}

// 改变聊天人
export const switchUserAction = ({commit}, id) => {
	commit('switchUserMutation', id);
}

// 添加聊天记录
export const addMessageAction = ({commit}, content) => {
	 debugger;
	commit('addMessageMutation', content)
}
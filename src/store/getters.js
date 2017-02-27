
export const sideData = (state) => {
	return state.sideData;
}

export const getMessageData = (state, id) =>{
	return state.messsageData[state.currentId];
}

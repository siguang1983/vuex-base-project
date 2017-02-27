import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

// state 中的初始化数据
const state = {
	currentId: '1',
	sideData: [		// 存储侧栏用户数据
		{
			id: '1',
			name: 'siguang',
			introduce: '函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回'
		},
		{
			id: '2',
			name: 'lulu',
			introduce: '解构赋值对提取JSON对象中的数据，尤其有用。'
		}
	],
	messsageData: {		// 存储聊天消息
		'1': {
			name: 'siguang',
			message: [
				'aaaaaaa',
				'bbbbb',
				'ccccc'
			]
		},
		'2': {
			name: 'lulu',
			message: [
				'ddddd',
				'eeeee',
				'fffff'
			]
		}
	}
}

// 实例化Vuex
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
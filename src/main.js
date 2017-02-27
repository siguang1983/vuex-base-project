
import Vue from 'vue'
import chat from './components/chat.vue';
import store from './store'

new Vue({
	el: '#app',
	store,
	render: h => h(chat)
})

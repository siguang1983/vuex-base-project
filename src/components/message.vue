<template>
	<div class="char-message">
		
		<div class="message-content">
			<p v-for="msg in messageData.message">
				<span>{{ messageData.name }}</span>
				<i>{{ msg }}</i>
			</p>
		</div>
		<div class="meessage-insert">
			<input type="text" v-model="msgContent" name="">
			<input type="button" @click="sendMessage" value="send">
		</div>

	</div>
</template>

<script>

	import { mapGetters } from 'vuex'
	
	export default {
		name: 'message',
		data(){
			return {
				msgContent: ''
			}
		},

		computed:{
			...mapGetters({
				messageData: 'getMessageData'		// 获取用户的信息
			})
		},

		methods:{
			sendMessage(){		// 提交消息

				if(this.msgContent == ''){
					alert('请输入聊天内容');
					return false;
				}

				this.$store.dispatch('addMessageAction', this.msgContent);

			}
		}
	}

</script>
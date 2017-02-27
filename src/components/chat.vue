<style>
	body, ul, li{ margin:0; padding: 0; border: 0; list-style: none;  }
	.fix-clear:after{ display: block; clear: both; content: ''; height: 0; overflow: hidden; }
	.fix-clear { *zoom: 1; }
	.char { border: 1px #ccc solid; width: 1000px; margin: 0 auto; padding: 20px 0; }
	.char-silder, .char-message { float: left; }
	.char-silder { width: 260px; margin: 20px; background-color: #ccc; }
	.char-silder li { padding: 10px; border-bottom: 1px #fff solid; }
	.char-message { width: 700px; margin-top: 20px;}
	.message-content { height: 300px; overflow-y: scroll; }
	.message-content p { border-bottom: 1px #ccc solid;}
	.message-content p span, .message-content p i { display: block; padding: 5px 0; }
</style>

<template>
	<div class="char fix-clear">
		<h1 style="text-align: center;">聊天室</h1>

		<side></side>
		<message></message>
	</div>
</template>

<script>

	import side from './side.vue';
	import message from './message.vue';

	export default {
		name: 'chat',
		components: {
			side,
			message
		}
	}

</script>
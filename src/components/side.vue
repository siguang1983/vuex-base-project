<template>
	<div class="char-silder">
		<ul>
			<li v-for="side in getSideData" @click="switchUser(side.id)">
				<p>{{ side.name }}</p>
				<p>{{ side.introduce }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	
	import { mapState, mapGetters, mapMutations } from 'vuex';

	export default {
		name: 'side',
		data(){
			return {

			}
		},

		computed: {
			...mapState({
				getSideData: 'sideData'			// 通过getter获取侧栏用户数据
			})
		},

		methods: {
			switchUser(id){
				// 更改聊天用户
				this.$store.dispatch('switchUserAction', id);		// 通过Action来改变state的值
			}
		}
	}

</script>